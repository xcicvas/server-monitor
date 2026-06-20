import { useCallback, useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useAppStore } from '../stores/useAppStore'

export function useDepthScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const meshRef = useRef<THREE.Mesh | null>(null)
  const animRef = useRef<number>(0)

  const targetRot = useRef({ x: 0, y: 0 })
  const curRot = useRef({ x: 0, y: 0 })
  const isPointerDown = useRef(false)
  const lastPointer = useRef({ x: 0, y: 0 })

  const {
    originalImage,
    depthResult,
    parallaxStrength,
    viewMode,
    isLocked,
  } = useAppStore()

  // Init Three.js
  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const w = container.clientWidth
    const h = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-w/2, w/2, h/2, -h/2, 0.1, 1000)
    camera.position.z = 500
    cameraRef.current = camera
    sceneRef.current = scene

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const geometry = new THREE.PlaneGeometry(w, h)
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: null },
        uDepthTexture: { value: null },
        uRotationX: { value: 0 },
        uRotationY: { value: 0 },
        uStrength: { value: parallaxStrength },
        uViewMode: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform sampler2D uDepthTexture;
        uniform float uRotationX;
        uniform float uRotationY;
        uniform float uStrength;
        uniform int uViewMode;
        varying vec2 vUv;

        void main() {
          vec4 color;
          if (uViewMode == 1) {
            // Original image
            color = texture2D(uTexture, vUv);
          } else if (uViewMode == 2) {
            // Depth visualization
            color = texture2D(uDepthTexture, vUv);
          } else {
            // Spatial parallax
            float depth = texture2D(uDepthTexture, vUv).r;
            vec2 offset = vec2(uRotationY, -uRotationX) * depth * uStrength * 0.12;
            vec2 uv = vUv + offset;
            uv = clamp(uv, 0.0, 1.0);
            color = texture2D(uTexture, uv);
          }
          gl_FragColor = color;
        }
      `,
      transparent: true,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    meshRef.current = mesh

    const animate = () => {
      animRef.current = requestAnimationFrame(animate)
      curRot.current.x += (targetRot.current.x - curRot.current.x) * 0.12
      curRot.current.y += (targetRot.current.y - curRot.current.y) * 0.12

      if (meshRef.current) {
        const mat = meshRef.current.material as THREE.ShaderMaterial
        mat.uniforms.uRotationX.value = curRot.current.x
        mat.uniforms.uRotationY.value = curRot.current.y
        mat.uniforms.uStrength.value = parallaxStrength
        mat.uniforms.uViewMode.value = viewMode === 'original' ? 1 : viewMode === 'depth' ? 2 : 0
      }

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      const rw = container.clientWidth
      const rh = container.clientHeight
      camera.left = -rw/2; camera.right = rw/2
      camera.top = rh/2; camera.bottom = -rh/2
      camera.updateProjectionMatrix()
      renderer.setSize(rw, rh)
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animRef.current)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      container.removeChild(renderer.domElement)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Update textures
  useEffect(() => {
    if (!meshRef.current || !originalImage) return
    if (viewMode === 'depth') return

    const loader = new THREE.TextureLoader()
    loader.load(originalImage, (tex) => {
      tex.minFilter = THREE.LinearFilter
      tex.magFilter = THREE.LinearFilter
      if (meshRef.current) {
        (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTexture.value = tex
      }
    })
  }, [originalImage, viewMode])

  useEffect(() => {
    if (!meshRef.current || !depthResult) return

    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)
      const tex = new THREE.CanvasTexture(canvas)
      tex.minFilter = THREE.LinearFilter
      tex.magFilter = THREE.LinearFilter
      if (meshRef.current) {
        (meshRef.current.material as THREE.ShaderMaterial).uniforms.uDepthTexture.value = tex
      }
    }
    img.src = depthResult.depthImage
  }, [depthResult, viewMode])

  // Pointer events
  const onPointerDown = (e: React.PointerEvent) => {
    if (isLocked) return
    isPointerDown.current = true
    lastPointer.current = { x: e.clientX, y: e.clientY }
    try { (e.target as HTMLElement).setPointerCapture(e.pointerId) } catch {}
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isPointerDown.current || isLocked || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const dx = (e.clientX - lastPointer.current.x) / rect.width
    const dy = (e.clientY - lastPointer.current.y) / rect.height
    targetRot.current.y += dx * 0.8
    targetRot.current.x += dy * 0.8
    targetRot.current.x = Math.max(-0.4, Math.min(0.4, targetRot.current.x))
    targetRot.current.y = Math.max(-0.4, Math.min(0.4, targetRot.current.y))
    lastPointer.current = { x: e.clientX, y: e.clientY }
  }

  const onPointerUp = () => { isPointerDown.current = false }

  const onMouseMove = (e: React.MouseEvent) => {
    if (isPointerDown.current || isLocked || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    targetRot.current.x = y * 0.15
    targetRot.current.y = x * 0.2
  }

  return {
    containerRef,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onMouseMove,
  }
}

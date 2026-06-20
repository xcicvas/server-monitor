import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useAppStore } from '../stores/useAppStore'

export function useDepthScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const meshRef = useRef<THREE.Mesh | null>(null)
  const matRef = useRef<THREE.ShaderMaterial | null>(null)
  const animRef = useRef(0)

  const targetRot = useRef({ x: 0, y: 0 })
  const curRot = useRef({ x: 0, y: 0 })
  const isDown = useRef(false)
  const lastPtr = useRef({ x: 0, y: 0 })

  const { originalImage, depthResult, parallaxStrength, parallaxOffset, viewMode, isLocked } = useAppStore()

  // 初始化 Three.js 场景
  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    const w = container.clientWidth
    const h = container.clientHeight

    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2, 0.1, 1000)
    camera.position.z = 500
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x0f0f14, 1)
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // 视差着色器
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTex: { value: null as THREE.Texture | null },
        uDepth: { value: null as THREE.Texture | null },
        uRX: { value: 0 },
        uRY: { value: 0 },
        uStr: { value: 1.0 },
        uOff: { value: 0.12 },
        uMode: { value: 0 }, // 0: spatial, 1: original, 2: depth
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTex, uDepth;
        uniform float uRX, uRY, uStr, uOff;
        uniform int uMode;
        varying vec2 vUv;

        void main() {
          if (uMode == 1) {
            gl_FragColor = texture2D(uTex, vUv);
            return;
          }
          if (uMode == 2) {
            gl_FragColor = texture2D(uDepth, vUv);
            return;
          }

          // 视差模式 - 根据鼠标位置和深度图偏移采样
          float d = texture2D(uDepth, vUv).r;
          vec2 off = vec2(uRY, -uRX) * d * uStr * uOff;
          vec2 uv = clamp(vUv + off, 0.0, 1.0);
          gl_FragColor = texture2D(uTex, uv);
        }
      `,
      transparent: true,
    })
    matRef.current = mat

    const geo = new THREE.PlaneGeometry(w, h)
    const mesh = new THREE.Mesh(geo, mat)
    scene.add(mesh)
    meshRef.current = mesh

    // 动画循环
    const animate = () => {
      animRef.current = requestAnimationFrame(animate)

      // 平滑旋转
      curRot.current.x += (targetRot.current.x - curRot.current.x) * 0.12
      curRot.current.y += (targetRot.current.y - curRot.current.y) * 0.12

      if (matRef.current) {
        matRef.current.uniforms.uRX.value = curRot.current.x
        matRef.current.uniforms.uRY.value = curRot.current.y
        matRef.current.uniforms.uStr.value = parallaxStrength
        matRef.current.uniforms.uOff.value = parallaxOffset
        matRef.current.uniforms.uMode.value =
          viewMode === 'original' ? 1 : viewMode === 'depth' ? 2 : 0
      }

      renderer.render(scene, camera)
    }
    animate()

    // 窗口缩放
    const onResize = () => {
      if (!container || !cameraRef.current || !rendererRef.current || !meshRef.current) return
      const rw = container.clientWidth
      const rh = container.clientHeight
      cameraRef.current.left = -rw / 2
      cameraRef.current.right = rw / 2
      cameraRef.current.top = rh / 2
      cameraRef.current.bottom = -rh / 2
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(rw, rh)

      // 重新调整平面几何以适应新尺寸
      meshRef.current.geometry.dispose()
      meshRef.current.geometry = new THREE.PlaneGeometry(rw, rh)
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animRef.current)
      renderer.dispose()
      geo.dispose()
      mat.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  // 加载原始图纹理
  useEffect(() => {
    if (!matRef.current || !originalImage) return
    if (viewMode === 'depth') {
      // depth 模式下不需要原图
      return
    }

    new THREE.TextureLoader().load(originalImage, (t) => {
      t.minFilter = THREE.LinearFilter
      t.magFilter = THREE.LinearFilter
      t.needsUpdate = true
      if (matRef.current) {
        matRef.current.uniforms.uTex.value = t
      }
    })
  }, [originalImage, viewMode])

  // 加载深度图纹理
  useEffect(() => {
    if (!matRef.current || !depthResult) return
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.drawImage(img, 0, 0)
      const t = new THREE.CanvasTexture(canvas)
      t.minFilter = THREE.LinearFilter
      t.magFilter = THREE.LinearFilter
      if (matRef.current) {
        matRef.current.uniforms.uDepth.value = t
      }
    }
    img.src = depthResult.depthImage
  }, [depthResult])

  // 指针事件 - 拖拽
  const onPointerDown = (e: React.PointerEvent) => {
    if (isLocked) return
    isDown.current = true
    lastPtr.current = { x: e.clientX, y: e.clientY }
    try { (e.target as HTMLElement).setPointerCapture(e.pointerId) } catch {}
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDown.current || isLocked || !containerRef.current) return
    const r = containerRef.current.getBoundingClientRect()
    const dx = (e.clientX - lastPtr.current.x) / r.width
    const dy = (e.clientY - lastPtr.current.y) / r.height
    targetRot.current.y = Math.max(-0.4, Math.min(0.4, targetRot.current.y + dx * 0.8))
    targetRot.current.x = Math.max(-0.4, Math.min(0.4, targetRot.current.x + dy * 0.8))
    lastPtr.current = { x: e.clientX, y: e.clientY }
  }

  const onPointerUp = () => { isDown.current = false }

  // 鼠标移动 - 悬停视差
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDown.current || isLocked || !containerRef.current) return
    const r = containerRef.current.getBoundingClientRect()
    targetRot.current.x = ((e.clientY - r.top) / r.height - 0.5) * 0.15
    targetRot.current.y = ((e.clientX - r.left) / r.width - 0.5) * 0.2
  }

  return { containerRef, onPointerDown, onPointerMove, onPointerUp, onMouseMove }
}

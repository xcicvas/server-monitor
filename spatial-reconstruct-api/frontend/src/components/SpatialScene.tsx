import { useEffect } from 'react'
import { useAppStore } from '../stores/useAppStore'
import { useDepthScene } from '../hooks/useDepthScene'

export function SpatialScene() {
  const { originalImage, depthResult } = useAppStore()
  const { containerRef, onPointerDown, onPointerMove, onPointerUp, onMouseMove } = useDepthScene()

  // 处理重置视角事件
  useEffect(() => {
    const handler = () => {
      window.dispatchEvent(new CustomEvent('spatial:reset-rot'))
    }
    window.addEventListener('spatial:reset-view', handler)
    return () => window.removeEventListener('spatial:reset-view', handler)
  }, [])

  if (!originalImage || !depthResult) return null

  return (
    <div
      ref={containerRef}
      className="w-full h-full cursor-grab active:cursor-grabbing"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onMouseMove={onMouseMove}
      style={{ touchAction: 'none' }}
    />
  )
}

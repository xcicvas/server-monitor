import { useAppStore } from '../stores/useAppStore'
import { useDepthScene } from '../hooks/useDepthScene'

export function SpatialScene() {
  const { originalImage, depthResult } = useAppStore()
  const { containerRef, onPointerDown, onPointerMove, onPointerUp, onMouseMove } = useDepthScene()

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

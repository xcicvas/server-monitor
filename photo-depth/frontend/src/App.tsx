import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Gallery } from './pages/Gallery'
import { Settings } from './pages/Settings'
import { Admin } from './pages/Admin'
import { Sidebar } from './components/Sidebar'

export default function App() {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-[#0f0f14] text-[#e5e5ea]">
        <Routes>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0f0f14] text-[#e5e5ea]">
      {/* 侧边栏：移动端固定抽屉，桌面端贴边 */}
      <Sidebar />
      {/* 主内容区：左侧留出 sidebar 宽度 (220px) */}
      <div className="md:ml-[220px] min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

import { NavLink } from 'react-router-dom'
import { Image, Images, Settings as SettingsIcon, ChevronLeft, Menu, X } from 'lucide-react'
import { useAppStore } from '../stores/useAppStore'

interface NavItem {
  to: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: '深度工作台', icon: Image },
  { to: '/gallery', label: '历史作品', icon: Images },
  { to: '/settings', label: '偏好设置', icon: SettingsIcon },
]

export function Sidebar() {
  const { sidebarCollapsed, toggleSidebar, history } = useAppStore()

  return (
    <>
      {/* 手机端：顶部 hamburger 按钮（仅在移动端显示） */}
      <button
        onClick={toggleSidebar}
        className="fixed top-3.5 left-3.5 z-50 h-9 w-9 flex items-center justify-center rounded-lg bg-[#1f1f28] border border-[#2a2a36] text-[#9a9aa5] hover:text-[#e5e5ea] md:hidden"
        aria-label="打开菜单"
      >
        <Menu className="w-4 h-4" />
      </button>

      {/* 遮罩层 - 仅手机端显示 */}
      {!sidebarCollapsed && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* 侧边栏 */}
      <aside
        className={`
          fixed md:sticky top-0 h-screen z-50 md:z-auto
          bg-[#131318] border-r border-[#22222c]
          flex flex-col
          transition-transform duration-200 ease-out
          ${sidebarCollapsed
            ? '-translate-x-full md:translate-x-0 md:w-[68px]'
            : 'w-[220px] translate-x-0'
          }
          md:translate-x-0
        `}
      >
        {/* Logo */}
        <div className={`flex items-center gap-3 h-14 border-b border-[#22222c] flex-shrink-0 ${
          sidebarCollapsed ? 'justify-center px-2' : 'px-4'
        }`}>
          {/* 手机端关闭按钮 */}
          <button
            onClick={toggleSidebar}
            className="absolute right-2 top-3.5 h-7 w-7 flex items-center justify-center rounded-md text-[#9a9aa5] hover:text-[#e5e5ea] md:hidden"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          {!sidebarCollapsed && (
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-medium text-[#e5e5ea] truncate">Spatial Studio</span>
              <span className="text-[11px] text-[#737373]">照片空间重构</span>
            </div>
          )}
        </div>

        {/* 导航 */}
        <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto">
          {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => {
                // 手机端点击导航后关闭抽屉
                if (window.innerWidth < 768) toggleSidebar()
              }}
              className={({ isActive }) => `
                flex items-center gap-3 h-10 px-2.5 rounded-md text-sm transition-colors
                ${sidebarCollapsed ? 'justify-center' : ''}
                ${isActive
                  ? 'bg-[#1f1f28] text-[#e5e5ea]'
                  : 'text-[#9a9aa5] hover:bg-[#1a1a22] hover:text-[#e5e5ea]'
                }
              `}
              title={label}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {!sidebarCollapsed && <span className="truncate">{label}</span>}
              {!sidebarCollapsed && to === '/gallery' && history.length > 0 && (
                <span className="ml-auto text-[11px] text-[#737373] bg-[#1f1f28] px-1.5 py-0.5 rounded">
                  {history.length}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* 底部 - 折叠按钮（仅桌面端显示） */}
        <div className="p-2 border-t border-[#22222c] hidden md:block flex-shrink-0">
          <button
            onClick={toggleSidebar}
            className="w-full flex items-center gap-3 h-9 px-2.5 rounded-md text-sm text-[#9a9aa5] hover:bg-[#1a1a22] hover:text-[#e5e5ea] transition-colors"
          >
            <ChevronLeft className={`w-4 h-4 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} />
            {!sidebarCollapsed && <span>收起侧边栏</span>}
          </button>
        </div>
      </aside>
    </>
  )
}

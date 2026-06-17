import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { initTheme } from './hooks/useTheme'

// 渲染前应用主题（纯 JS，不依赖 React Hook，避免首屏闪烁）
initTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

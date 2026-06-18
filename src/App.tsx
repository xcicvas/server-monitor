import { useState, useCallback } from 'react';
import { useServerStore } from './store/serverStore';
import { useWebSocketServers } from './hooks/useWebSocket';
import { Header } from './components/Header';
import { ServerMonitorCard } from './components/ServerMonitorCard';
import { AddServerModal } from './components/AddServerModal';
import { EmptyState } from './components/EmptyState';
import { OverviewStats } from './components/OverviewStats';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { servers, addServer, removeServer } = useServerStore();

  // WebSocket 自动管理所有服务器的连接
  useWebSocketServers();

  const handleDelete = useCallback(
    (id: string) => {
      if (confirm('确定要删除该服务器吗？')) removeServer(id);
    },
    [removeServer]
  );

  return (
    <div className="min-h-screen">
      <Header onAddClick={() => setIsModalOpen(true)} servers={servers} />

      <main className="max-w-5xl mx-auto px-6 py-8">
        {servers.length === 0 ? (
          <EmptyState onAddClick={() => setIsModalOpen(true)} />
        ) : (
          <>
            {/* 总览统计 */}
            <OverviewStats />

            {/* 服务器卡片 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servers.map((server, index) => (
                <ServerMonitorCard
                  key={server.id}
                  server={server}
                  index={index}
                  onDelete={handleDelete}
                  onRefresh={() => {
                    // WebSocket 会自动重连，这里手动触发一下
                    useServerStore.getState().setStatus(server.id, 'checking');
                  }}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <AddServerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={(data) => addServer(data)}
      />
    </div>
  );
}

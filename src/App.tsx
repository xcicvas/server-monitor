import { useState, useCallback } from 'react';
import { useServerStore } from './store/serverStore';
import { usePollingServers } from './hooks/usePollingServers';
import { Header } from './components/Header';
import { ServerMonitorCard } from './components/ServerMonitorCard';
import { AddServerModal } from './components/AddServerModal';
import { EmptyState } from './components/EmptyState';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { servers, addServer, removeServer } = useServerStore();
  const { probeOne } = usePollingServers();

  const handleAdd = useCallback(
    ({ name, address, interval }: { name: string; address: string; interval: number }) => {
      addServer({ name, address, interval });
    },
    [addServer]
  );

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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servers.map((server, index) => (
              <ServerMonitorCard
                key={server.id}
                server={server}
                index={index}
                onDelete={handleDelete}
                onRefresh={(id) => {
                  const s = servers.find((x) => x.id === id);
                  if (s) probeOne(s);
                }}
              />
            ))}
          </div>
        )}
      </main>

      <AddServerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAdd}
      />
    </div>
  );
}

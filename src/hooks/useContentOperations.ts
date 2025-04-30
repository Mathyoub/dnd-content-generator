import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { City, NPC, Item } from '@/types/campaign';

interface UseContentOperationsProps {
  type: 'city' | 'npc' | 'item';
  onUpdateList?: (newItem: City | NPC | Item) => void;
  onRemoveFromList?: (id: string) => void;
}

export default function useContentOperations({ type, onUpdateList, onRemoveFromList }: UseContentOperationsProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const getEndpoint = (id: string) => {
    const plural = type === 'city' ? 'cities' : `${type}s`;
    return `/api/${plural}/${id}`;
  };

  const handleEdit = (id: string) => {
    const plural = type === 'city' ? 'cities' : `${type}s`;
    router.push(`/${plural}/${id}/edit`);
  };

  const handleDuplicate = async (id: string) => {
    try {
      const res = await fetch(`${getEndpoint(id)}/duplicate`, { method: 'POST' });
      if (!res.ok) throw new Error(`Failed to duplicate ${type}`);

      const duplicated = await res.json();
      onUpdateList?.(duplicated);
    } catch (err) {
      setError(err instanceof Error ? err.message : `Failed to duplicate ${type}`);
      console.error('Error duplicating:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(`Are you sure you want to delete this ${type}?`)) return;

    setIsDeleting(true);
    try {
      const res = await fetch(getEndpoint(id), { method: 'DELETE' });
      if (!res.ok) throw new Error(`Failed to delete ${type}`);

      onRemoveFromList?.(id);
    } catch (err) {
      setError(err instanceof Error ? err.message : `Failed to delete ${type}`);
      console.error('Error deleting:', err);
    } finally {
      setIsDeleting(false);
    }
  };

  return {
    handleEdit,
    handleDuplicate,
    handleDelete,
    error,
    isDeleting,
  };
}
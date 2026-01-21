import { useCallback, useState } from 'react';

interface WithId {
  id: string;
}

interface UseItemListReturn<T extends WithId> {
  items: T[];
  add: (item: Omit<T, 'id'>) => void;
  remove: (id: string) => void;
  clear: () => void;
}

const useItemList = <T extends WithId>(): UseItemListReturn<T> => {
  const [items, setItems] = useState<T[]>([]);

  const add = useCallback((item: Omit<T, 'id'>) => {
    setItems((prev) => [...prev, { id: crypto.randomUUID(), ...item } as T]);
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  return { items, add, remove, clear };
};

export default useItemList;

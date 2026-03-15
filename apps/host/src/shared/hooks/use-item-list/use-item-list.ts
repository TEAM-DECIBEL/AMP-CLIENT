import { useCallback, useState } from 'react';

import type { ItemId } from '@entities/event/event-form';

interface WithOptionalId {
  id?: ItemId;
}

type WithRequiredId<T extends WithOptionalId> = Omit<T, 'id'> & {
  id: ItemId;
};

interface UseItemListReturn<T extends WithOptionalId> {
  items: WithRequiredId<T>[];
  add: (item: Omit<T, 'id'>) => void;
  remove: (id: string | number) => void;
  clear: () => void;
}

const ensureItemId = <T extends WithOptionalId>(item: T): WithRequiredId<T> => {
  return {
    ...item,
    id: item.id ?? crypto.randomUUID(),
  } as WithRequiredId<T>;
};

const useItemList = <T extends WithOptionalId>(
  initialItems: T[] = [],
): UseItemListReturn<T> => {
  const [items, setItems] = useState<WithRequiredId<T>[]>(() =>
    initialItems.map(ensureItemId),
  );

  const add = useCallback((item: Omit<T, 'id'>) => {
    setItems((prev) => [...prev, ensureItemId(item as T)]);
  }, []);

  const remove = useCallback((id: ItemId) => {
    setItems((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  return { items, add, remove, clear };
};

export default useItemList;

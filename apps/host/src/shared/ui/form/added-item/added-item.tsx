import type { ReactNode } from 'react';

import { DeleteIcon } from '@amp/ads-ui/icons';

import * as styles from './added-item.css';

type AddedItemProps<T> = {
  items: T[];
  onRemove: (id: string) => void;
  getId: (item: T) => string;
  getFirst: (item: T) => string;
  getSecond: (item: T) => string;
  firstIcon: ReactNode;
  secondIcon: ReactNode;
  secondType: 'time' | 'location';
};

const AddedItem = <T,>({
  items,
  onRemove,
  getId,
  getFirst,
  getSecond,
  firstIcon,
  secondIcon,
  secondType,
}: AddedItemProps<T>) => {
  if (items.length === 0) {
    return null;
  }

  const secondVariant = secondType === 'location' ? 'location' : 'default';
  return (
    <div className={styles.listContainer}>
      {[...items].reverse().map((item) => {
        const id = getId(item);
        const first = getFirst(item);
        const second = getSecond(item);
        const hasSecond = second.trim() !== '';

        return (
          <div key={id} className={styles.addedItemContainer}>
            <div className={styles.textContainer()}>
              <span className={styles.icon}>{firstIcon}</span>
              <div className={styles.value}>{first}</div>
            </div>

            {hasSecond ? (
              <div className={styles.textContainer({ variant: secondVariant })}>
                <span className={styles.icon}>{secondIcon}</span>
                <div className={styles.value}>{second}</div>
              </div>
            ) : (
              <div aria-hidden='true' />
            )}

            <button
              type='button'
              className={styles.removeButton}
              onClick={() => onRemove(id)}
              aria-label='항목 삭제'
            >
              <DeleteIcon />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AddedItem;

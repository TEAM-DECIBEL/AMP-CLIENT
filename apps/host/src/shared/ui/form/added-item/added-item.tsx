import type { ReactNode } from 'react';

import { DeleteIcon } from '@amp/ads-ui/icons';

import * as styles from './added-item.css';

type SecondVariant = 'default' | 'location';

interface AddedItemModel {
  id: string;
  first: string;
  second?: string;
  firstIcon: ReactNode;
  secondIcon?: ReactNode;
  secondVariant?: SecondVariant;
}

interface AddedItemProps<T> {
  items: T[];
  onRemove: (id: string) => void;
  getItem: (item: T) => AddedItemModel;
}

const AddedItem = <T,>({ items, onRemove, getItem }: AddedItemProps<T>) => {
  if (items.length === 0) {
    return null;
  }
  return (
    <div className={styles.listContainer}>
      {[...items].reverse().map((item) => {
        const {
          id,
          first,
          second,
          firstIcon,
          secondIcon,
          secondVariant = 'default',
        } = getItem(item);

        const trimmedSecond = second?.trim();
        const hasSecond = Boolean(trimmedSecond);

        return (
          <div key={id} className={styles.addedItemContainer}>
            <div className={styles.textContainer()}>
              <span className={styles.icon}>{firstIcon}</span>
              <div className={styles.value}>{first}</div>
            </div>

            {hasSecond ? (
              <div className={styles.textContainer({ variant: secondVariant })}>
                <span className={styles.icon}>{secondIcon}</span>
                <div className={styles.value}>{trimmedSecond}</div>
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

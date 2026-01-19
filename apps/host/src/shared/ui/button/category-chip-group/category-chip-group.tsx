import { CategoryButton } from '@amp/ads-ui';

import * as styles from './category-chip-group.css';

type Category = { id: number; label: string };

type CategoryChipGroups = {
  categories: Category[];
  activeCategoryIds: number[];
  onToggle: (id: number, nextSelected: boolean) => void;
};

const chunkCategories = (categories: Category[]) => {
  const chunk: Category[][] = [];
  for (let i = 0; i < categories.length; i += 3) {
    chunk.push(categories.slice(i, i + 3));
  }
  return chunk;
};

const CategoryChipGroup = ({
  categories,
  activeCategoryIds,
  onToggle,
}: CategoryChipGroups) => {
  const rows = chunkCategories(categories);
  return (
    <div className={styles.chipGroupContainer}>
      {rows.map((row, rowIdx) => (
        <div key={rowIdx} className={styles.row}>
          {row.map((c) => {
            const selected = activeCategoryIds.includes(c.id);
            return (
              <CategoryButton
                key={c.id}
                variant='neutral'
                selected={selected}
                onChange={(next) => onToggle(c.id, next)}
              >
                {c.label}
              </CategoryButton>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default CategoryChipGroup;

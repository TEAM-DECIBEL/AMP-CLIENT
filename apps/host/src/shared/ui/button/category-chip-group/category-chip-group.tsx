import { CategoryButton } from '@amp/ads-ui';

import * as styles from './category-chip-group.css';

interface Category {
  id: number;
  label: string;
}

interface CategoryRow {
  key: string;
  items: Category[];
}

interface CategoryChipGroupProps {
  categories: Category[];
  activeCategoryIds: number[];
  onToggle: (id: number, nextSelected: boolean) => void;
}

const CHIPS_PER_ROW = 3;

const chunkCategories = (categories: Category[]): CategoryRow[] => {
  const rows: CategoryRow[] = [];

  for (let i = 0; i < categories.length; i += CHIPS_PER_ROW) {
    const items = categories.slice(i, i + CHIPS_PER_ROW);

    rows.push({
      key: items.map((c) => c.id).join('-'),
      items,
    });
  }

  return rows;
};

const CategoryChipGroup = ({
  categories,
  activeCategoryIds,
  onToggle,
}: CategoryChipGroupProps) => {
  const rows = chunkCategories(categories);

  return (
    <div className={styles.chipGroupContainer}>
      {rows.map((row) => (
        <div key={row.key} className={styles.row}>
          {row.items.map((c) => {
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

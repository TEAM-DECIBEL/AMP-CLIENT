import type { ReactNode } from 'react';

import * as styles from './category-button.css';

export type CategoryButtonVariants = 'neutral' | 'primary';

interface CategoryButtonProps {
  children: ReactNode;
  variant: CategoryButtonVariants;
  selected: boolean;
  onChange: (nextSelected: boolean) => void;
}

const CategoryButton = ({
  children,
  variant,
  selected,
  onChange,
}: CategoryButtonProps) => {
  return (
    <button
      type='button'
      onClick={() => onChange(!selected)}
      className={styles.categoryButton({ variant, selected })}
      aria-pressed={selected}
    >
      {children}
    </button>
  );
};

export default CategoryButton;

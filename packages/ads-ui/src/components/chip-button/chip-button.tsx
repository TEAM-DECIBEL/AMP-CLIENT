import type { ReactNode } from 'react';

import * as styles from './chip-button.css';

export type ChipButtonVariants = 'neutral' | 'primary';

interface ChipButtonProps {
  children: ReactNode;
  variant: ChipButtonVariants;
  selected: boolean;
  onChange: (nextSelected: boolean) => void;
}

export const ChipButton = ({
  children,
  variant,
  selected,
  onChange,
}: ChipButtonProps) => {
  return (
    <button
      type='button'
      onClick={() => onChange(!selected)}
      className={styles.chipButton({ selectType: variant, selected })}
      aria-pressed={selected}
    >
      {children}
    </button>
  );
};

export default ChipButton;

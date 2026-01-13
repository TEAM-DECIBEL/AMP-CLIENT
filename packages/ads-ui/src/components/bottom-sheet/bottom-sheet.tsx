import type { ReactNode } from 'react';

import * as styles from './bottom-sheet.css';

export interface BottomSheetProps {
  open: boolean;
  onOpenChange?: (nextOpen: boolean) => void;
  children: ReactNode;
}

const BottomSheet = ({ open, children }: BottomSheetProps) => {
  if (!open) {
    return null;
  }

  return (
    <div
      data-component='BottomSheet'
      data-state='open'
      className={styles.container}
    >
      <div aria-hidden className={styles.overlay} />

      <div
        className={styles.sheet}
      >
        <div aria-hidden className={styles.handleWrap}>
          <div className={styles.handle} />
        </div>

        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;

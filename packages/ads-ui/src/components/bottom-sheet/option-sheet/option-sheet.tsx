import type { ReactNode } from 'react';

import BottomSheet from '../bottom-sheet';

import * as styles from './option-sheet.css';

interface OptionSheetProps {
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const OptionSheetRoot = ({ open, onClose, children }: OptionSheetProps) => {
  return (
    <BottomSheet open={open} onClose={onClose}>
      <BottomSheet.Panel>
        <BottomSheet.Handle />
        <div className={styles.list}>{children}</div>
      </BottomSheet.Panel>
    </BottomSheet>
  );
};

interface OptionSheetItemProps {
  children: ReactNode;
  onClick?: () => void;
}

const OptionSheetItem = ({ children, onClick }: OptionSheetItemProps) => {
  return (
    <button type='button' onClick={onClick} className={styles.item}>
      {children}
    </button>
  );
};

const OptionSheet = Object.assign(OptionSheetRoot, {
  Item: OptionSheetItem,
});

export default OptionSheet;

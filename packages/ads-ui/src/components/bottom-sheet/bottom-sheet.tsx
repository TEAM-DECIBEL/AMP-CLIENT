import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import * as styles from './bottom-sheet.css';

interface BottomSheetBaseProps {
  children: ReactNode;
}

interface BottomSheetRootProps extends BottomSheetBaseProps {
  open: boolean;
  onClose?: () => void;
}

const BottomSheetRoot = ({ open, onClose, children }: BottomSheetRootProps) => {
  useEffect(() => {
    if (!open || typeof document === 'undefined') {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div className={styles.container} onClick={onClose}>
      <div className={styles.overlay} />
      {children}
    </div>,
    document.body,
  );
};

const BottomSheetPanel = ({ children }: BottomSheetBaseProps) => {
  return (
    <div className={styles.panel} onClick={(event) => event.stopPropagation()}>
      {children}
    </div>
  );
};

const BottomSheetHandle = () => {
  return (
    <div aria-hidden className={styles.handleWrap}>
      <div className={styles.handle} />
    </div>
  );
};

const BottomSheetHeader = ({ children }: BottomSheetBaseProps) => {
  return <div className={styles.header}>{children}</div>;
};

const BottomSheetTitle = ({ children }: BottomSheetBaseProps) => {
  return <h2 className={styles.title}>{children}</h2>;
};

const BottomSheetDescription = ({ children }: BottomSheetBaseProps) => {
  return <p className={styles.description}>{children}</p>;
};

const BottomSheetContent = ({ children }: BottomSheetBaseProps) => {
  return <div className={styles.content}>{children}</div>;
};

const BottomSheetActions = ({ children }: BottomSheetBaseProps) => {
  return <div className={styles.actions}>{children}</div>;
};

const BottomSheet = Object.assign(BottomSheetRoot, {
  Panel: BottomSheetPanel,
  Handle: BottomSheetHandle,
  Header: BottomSheetHeader,
  Title: BottomSheetTitle,
  Description: BottomSheetDescription,
  Content: BottomSheetContent,
  Actions: BottomSheetActions,
});

export default BottomSheet;

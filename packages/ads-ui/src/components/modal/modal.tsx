import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import * as styles from './modal.css';

interface ModalBaseProps {
  children: ReactNode;
}

interface ModalRootProps extends ModalBaseProps {
  open?: boolean;
  onClose?: () => void;
}

const ModalRoot = ({ open = false, onClose, children }: ModalRootProps) => {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      {children}
    </div>,
    document.body,
  );
};

interface ModalPanelProps extends ModalBaseProps {
  role?: 'dialog' | 'alertdialog';
  'aria-modal'?: boolean;
}

const ModalPanel = ({
  role = 'dialog',
  'aria-modal': ariaModal = true,
  children,
}: ModalPanelProps) => {
  return (
    <div
      className={styles.modal}
      role={role}
      aria-modal={ariaModal}
      onClick={(event) => event.stopPropagation()}
    >
      {children}
    </div>
  );
};

const ModalContent = ({ children }: ModalBaseProps) => {
  return <div className={styles.content}>{children}</div>;
};

const ModalActions = ({ children }: ModalBaseProps) => {
  return <div className={styles.actions}>{children}</div>;
};

const ModalTitle = ({ children }: ModalBaseProps) => {
  return <h2 className={styles.title}>{children}</h2>;
};

const ModalDescription = ({ children }: ModalBaseProps) => {
  return <p className={styles.description}>{children}</p>;
};

const Modal = Object.assign(ModalRoot, {
  Panel: ModalPanel,
  Content: ModalContent,
  Title: ModalTitle,
  Description: ModalDescription,
  Actions: ModalActions,
});

export default Modal;

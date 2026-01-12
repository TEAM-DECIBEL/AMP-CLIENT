import type { ReactNode } from 'react';

import { RectButton } from '../index';

import * as styles from './modal.css';

interface ModalProps {
  open?: boolean;
  title: string;
  description?: ReactNode;
  confirmText: string;
  cancelText: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Modal = ({
  open = true,
  title,
  description,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: ModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <div className={styles.overlay} onClick={onCancel}>
      <div
        className={styles.modal}
        role='dialog'
        aria-modal='true'
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        <div className={styles.actions}>
          <RectButton variant='secondary' onClick={onCancel}>
            {cancelText}
          </RectButton>
          <RectButton variant='primary' onClick={onConfirm}>
            {confirmText}
          </RectButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;

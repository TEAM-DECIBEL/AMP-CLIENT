import type { ReactNode } from 'react';

import { RectButton } from '../index';

import * as styles from './modal.css';

interface ModalProps {
  title: string;
  description?: ReactNode;
  confirmText: string;
  cancelText: string;
}

const Modal = ({ title, description, confirmText, cancelText }: ModalProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal} role='dialog' aria-modal='true'>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        <div className={styles.actions}>
          <RectButton variant='secondary'>{cancelText}</RectButton>
          <RectButton variant='primary'>{confirmText}</RectButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;

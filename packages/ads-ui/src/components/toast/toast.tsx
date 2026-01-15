import { useEffect, useState } from 'react';

import { WifiIcon } from '../../icons';
import { useToastStore } from './toast.store';

import * as styles from './toast.css';

interface ToastProps {
  id: number;
  title: string;
  description?: string;
}

const SHOW_DURATION = 2500;
const EXIT_DURATION = 200;

const Toast = ({ id, title, description }: ToastProps) => {
  const remove = useToastStore((state) => state.remove);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, SHOW_DURATION);

    const removeTimer = setTimeout(() => {
      remove(id);
    }, SHOW_DURATION + EXIT_DURATION);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [id, remove]);

  return (
    <div
      className={styles.toast}
      data-exit={exiting}
      role='status'
      aria-live='polite'
      aria-atomic='true'
    >
      <span aria-hidden>
        <WifiIcon />
      </span>
      <div>
        <p className={styles.title}>{title}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

export default Toast;

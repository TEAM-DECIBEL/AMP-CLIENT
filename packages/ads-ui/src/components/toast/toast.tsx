import { WifiIcon } from '../../icons';

import * as styles from './toast.css';

interface ToastProps {
  title: string;
  description?: string;
}

const Toast = ({ title, description }: ToastProps) => {
  return (
    <div className={styles.toast}>
      <WifiIcon />
      <div>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

export default Toast;

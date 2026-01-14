import Toast from './toast';
import { useToastStore } from './toast.store';

import * as styles from './toast.css';

const ToastContainer = () => {
  const toasts = useToastStore((state) => state.toasts);

  return (
    <div className={styles.container}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          title={toast.title}
          description={toast.description}
        />
      ))}
    </div>
  );
};

export default ToastContainer;

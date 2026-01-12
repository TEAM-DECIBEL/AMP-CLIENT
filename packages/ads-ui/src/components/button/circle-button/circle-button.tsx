import { PenIcon, ShareIcon } from '../../../icons';

import * as styles from './circle-button.css';

type status = 'share' | 'write';

interface CircleButtonProps {
  status: status;
  onClick: () => void;
}

const CircleButton = ({ status, onClick }: CircleButtonProps) => {
  const icon =
    status === 'share' ? (
      <ShareIcon className={styles.icon} />
    ) : (
      <PenIcon className={styles.icon} />
    );

  return (
    <button
      type='button'
      onClick={onClick}
      className={styles.circleButton({ status })}
    >
      {icon}
    </button>
  );
};

export default CircleButton;

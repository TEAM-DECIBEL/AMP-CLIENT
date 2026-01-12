import { PenIcon, ShareIcon } from '../../../icons';

import * as styles from './circle-button.css';

type CircleButtonType = 'share' | 'write';

interface CircleButtonProps {
  type: CircleButtonType;
  onClick: () => void;
}

const CircleButton = ({ type, onClick }: CircleButtonProps) => {
  const icon =
    type === 'share' ? (
      <div className={styles.iconContainer({ type: 'share' })}>
        <ShareIcon className={styles.icon} />
      </div>
    ) : (
      <div className={styles.iconContainer({ type: 'write' })}>
        <PenIcon className={styles.icon} />
      </div>
    );

  return (
    <button
      type='button'
      onClick={onClick}
      className={styles.circleButton({ type })}
    >
      {icon}
    </button>
  );
};

export default CircleButton;

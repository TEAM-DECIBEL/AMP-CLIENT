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
      <ShareIcon className={styles.icon} />
    ) : (
      <PenIcon className={styles.icon} />
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

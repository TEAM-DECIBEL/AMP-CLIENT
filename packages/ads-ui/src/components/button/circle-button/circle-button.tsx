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
      <ShareIcon
        className={styles.icon}
        style={{ width: '2.7rem', height: '2.7rem' }}
      />
    ) : (
      <PenIcon
        className={styles.icon}
        style={{ width: '2.2rem', height: '2.2rem' }}
      />
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

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
      <ShareIcon className={styles.icon({ type: 'share' })} />
    ) : (
      <PenIcon className={styles.icon({ type: 'pen' })} />
    );

  return (
    <button
      type='button'
      onClick={onClick}
      className={styles.circleButton({ type })}
      aria-label={type === 'share' ? '공유하기' : '글쓰기'}
    >
      {icon}
    </button>
  );
};

export default CircleButton;

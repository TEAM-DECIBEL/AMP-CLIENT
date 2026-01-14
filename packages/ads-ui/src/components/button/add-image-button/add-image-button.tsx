import { CameraIcon } from '../../../icons';

import * as styles from './add-image-button.css';

interface AddImageButtonProps {
  imageUrl?: string;
  onClick: () => void;
}

const AddImageButton = ({ imageUrl, onClick }: AddImageButtonProps) => {
  const hasImage = Boolean(imageUrl);

  const content = hasImage ? (
    <img src={imageUrl} alt='첨부된 사진' className={styles.img} />
  ) : (
    <>
      <CameraIcon className={styles.icon} />
      <span>사진 첨부</span>
    </>
  );
  return (
    <button
      type='button'
      aria-label={hasImage ? '첨부된 사진 변경' : '사진 첨부'}
      className={styles.addImageButton({ hasImage })}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default AddImageButton;

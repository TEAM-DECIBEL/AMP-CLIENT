import { CameraIcon } from '../../../icons';

import * as styles from './add-image-button.css';

interface AddImageButtonProps {
  imageUrl?: string;
  onClick: () => void;
}

const AddImageButton = ({ imageUrl, onClick }: AddImageButtonProps) => {
  const hasImage = Boolean(imageUrl);
  return (
    <button
      type='button'
      className={styles.addImageButton({ hasImage })}
      onClick={onClick}
    >
      {hasImage ? (
        <img src={imageUrl} alt='첨부된 사진' className={styles.img} />
      ) : (
        <>
          <CameraIcon className={styles.icon} />
          <span>사진 첨부</span>
        </>
      )}
    </button>
  );
};

export default AddImageButton;

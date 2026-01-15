import { useRef } from 'react';

import { CameraIcon } from '../../../icons';

import * as styles from './add-image-button.css';

interface AddImageButtonProps {
  imageUrl?: string;
  onFileChange: (file: File) => void;
}

const AddImageButton = ({ imageUrl, onFileChange }: AddImageButtonProps) => {
  const hasImage = Boolean(imageUrl);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (hasImage) {
      return;
    }
    inputRef.current?.click();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    onFileChange(file);
    e.target.value = '';
  };

  const content = hasImage ? (
    <img src={imageUrl} alt='첨부된 사진' className={styles.img} />
  ) : (
    <>
      <CameraIcon className={styles.icon} />
      <span>사진 첨부</span>
    </>
  );
  return (
    <>
      <button
        type='button'
        aria-label={hasImage ? '첨부된 사진 변경' : '사진 첨부'}
        className={styles.addImageButton({ hasImage })}
        onClick={handleButtonClick}
      >
        {content}
      </button>

      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        onChange={handleChange}
        tabIndex={-1}
        aria-hidden='true'
        style={{ display: 'none' }}
      />
    </>
  );
};

export default AddImageButton;

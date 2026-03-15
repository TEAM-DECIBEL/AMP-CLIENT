import { useRef } from 'react';

import { CameraIcon } from '@amp/ads-ui/icons';

import * as styles from './multi-image-add-button.css';

interface MultiImageButtonProps {
  currentCount: number;
  maxCount?: number;
  onFilesChange: (files: File[]) => void;
}

const MultiImageButton = ({
  currentCount,
  maxCount = 20,
  onFilesChange,
}: MultiImageButtonProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) {
      return;
    }

    onFilesChange(files);
    e.target.value = '';
  };

  return (
    <>
      <button
        type='button'
        aria-label='사진 첨부'
        className={styles.button}
        onClick={handleButtonClick}
      >
        <CameraIcon className={styles.icon} />
        <span className={styles.text}>
          {currentCount > 0 ? `${currentCount}/${maxCount}` : '사진 첨부'}
        </span>
      </button>

      <input
        ref={inputRef}
        type='file'
        accept='image/jpeg,image/png,image/gif,image/webp'
        multiple
        onChange={handleChange}
        tabIndex={-1}
        aria-hidden='true'
        className={styles.input}
      />
    </>
  );
};

export default MultiImageButton;

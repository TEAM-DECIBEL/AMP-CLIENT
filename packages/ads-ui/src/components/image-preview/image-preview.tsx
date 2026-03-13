import { DeleteIcon } from '../../icons';

import * as styles from './image-preview.css';

interface ImagePreviewProps {
  src: string;
  onRemove: () => void;
}

const ImagePreview = ({ src, onRemove }: ImagePreviewProps) => {
  return (
    <div className={styles.previewContainer}>
      <img src={src} alt='첨부된 사진 미리보기' className={styles.previewImg} />
      <button
        type='button'
        onClick={onRemove}
        className={styles.removeButton}
        aria-label='이미지 삭제'
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default ImagePreview;

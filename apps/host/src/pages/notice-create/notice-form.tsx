import { useMemo } from 'react';

import {
  CategoryButton,
  CheckButton,
  CtaButton,
  ImagePreview,
  Textfield,
} from '@amp/ads-ui';
import { PinIcon } from '@amp/ads-ui/icons';
import { ButtonGradientSection, Loading } from '@amp/compositions';

import MultiImageAddButton from '@widgets/multi-image-add-button/multi-image-add-button';

import { useNoticeForm } from '@features/notice/use-notice-form';

import type { NoticeDetail } from '@entities/notice/types/notice';

import { useDragScroll } from '@shared/libs/use-drag-scroll';
import InputLayout from '@shared/ui/input/input-layout';
import Textarea from '@shared/ui/textarea/textarea';

import * as styles from './notice-form.css';

const MAX_IMAGES = 20;

interface NoticeFormProps {
  festivalId: number;
  noticeDetail?: NoticeDetail;
  activeCategories: Array<{ categoryId: number; categoryName: string }>;
  pinnedCount: number;
}

const NoticeForm = ({
  festivalId,
  noticeDetail,
  activeCategories,
  pinnedCount,
}: NoticeFormProps) => {
  const { scrollRef, onDragStart, onDragEnd, onDragMove } = useDragScroll();
  const { formState, handlers, isValid, isSubmitting, isCompressing } =
    useNoticeForm(
      festivalId,
      noticeDetail,
      noticeDetail?.noticeId,
      pinnedCount,
    );

  const categories = useMemo(
    () =>
      activeCategories.map((c) => ({
        id: c.categoryId,
        label: c.categoryName,
      })),
    [activeCategories],
  );

  const { isPinned, images, categoryId, title, content } = formState;
  const {
    handlePinToggle,
    handleImagesAdd,
    handleImageRemove,
    handleCategoryClick,
    handleFormChange,
    handleSubmit,
  } = handlers;

  if (isSubmitting) {
    return <Loading />;
  }

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>공연 공지</p>
          <p className={styles.description}>
            관객에게 전달할 공지 내용을 작성해주세요.
          </p>
        </div>

        <div className={styles.fixedBox}>
          <div className={styles.fixedText}>
            <PinIcon />
            <p>공지 상단 고정</p>
          </div>
          <CheckButton checked={isPinned} onChange={handlePinToggle} />
        </div>

        <InputLayout label='공지 이미지' isEssential={false}>
          <div
            ref={scrollRef}
            className={styles.imageListContainer}
            onMouseDown={onDragStart}
            onMouseMove={onDragMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            aria-label='공지 이미지 목록'
          >
            <MultiImageAddButton
              currentCount={images.length}
              maxCount={MAX_IMAGES}
              onFilesChange={handleImagesAdd}
            />

            {images.map((image, index) => (
              <ImagePreview
                key={image.type === 'new' ? image.id : image.url}
                src={image.type === 'new' ? image.previewUrl : image.url}
                onRemove={() => handleImageRemove(index)}
              />
            ))}
          </div>
        </InputLayout>

        <hr className={styles.divider} />

        <InputLayout label='카테고리' isEssential={true}>
          <div className={styles.chipContainer}>
            {categories.map((category) => (
              <CategoryButton
                key={category.id}
                variant='neutral'
                selected={categoryId === category.id}
                onChange={() => handleCategoryClick(category.id)}
              >
                {category.label}
              </CategoryButton>
            ))}
          </div>
        </InputLayout>

        <InputLayout id='notice-title' label='제목' isEssential={true}>
          <Textfield
            variant='default'
            id='notice-title'
            name='title'
            placeholder='공지 제목을 입력해주세요.'
            value={title}
            onChange={handleFormChange}
          />
        </InputLayout>

        <InputLayout id='notice-description' label='내용' isEssential={true}>
          <Textarea
            id='notice-description'
            name='content'
            placeholder='공지 내용을 입력해주세요.'
            value={content}
            onChange={handleFormChange}
          />
        </InputLayout>

        <ButtonGradientSection className={styles.buttonContainer}>
          <CtaButton
            type='common'
            htmlType='submit'
            color='gray'
            disabled={!isValid || isSubmitting || isCompressing}
          >
            완료
          </CtaButton>
        </ButtonGradientSection>
      </form>
    </>
  );
};

export default NoticeForm;

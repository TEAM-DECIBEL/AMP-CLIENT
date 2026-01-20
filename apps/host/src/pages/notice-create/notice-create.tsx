import {
  AddImageButton,
  CategoryButton,
  CheckButton,
  CtaButton,
  Textfield,
} from '@amp/ads-ui';
import { PinIcon } from '@amp/ads-ui/icons';

import { useNoticeForm } from '@shared/hooks/use-notice-form';
import InputLayout from '@shared/ui/input/input-layout';
import Textarea from '@shared/ui/textarea/textarea';

import * as styles from './notice-create.css';

const CATEGORIES = ['운영 시간', '입장 안내', 'MD', '이벤트', '퇴근길', '기타'];

const NoticeCreatePage = () => {
  const { formState, handlers, isValid } = useNoticeForm();

  const { isPinned, imageUrl, selectedCategory, title, content } = formState;
  const {
    handlePinToggle,
    handleImageChange,
    handleCategoryClick,
    handleTitleChange,
    handleContentChange,
    handleSubmit,
  } = handlers;
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
          <AddImageButton
            imageUrl={imageUrl}
            onFileChange={handleImageChange}
          />
        </InputLayout>
        <hr className={styles.divider} />
        <InputLayout label='카테고리' isEssential={true}>
          <div className={styles.chipContainer}>
            {CATEGORIES.map((category) => (
              <CategoryButton
                key={category}
                variant='neutral'
                selected={selectedCategory === category}
                onChange={() => handleCategoryClick(category)}
              >
                {category}
              </CategoryButton>
            ))}
          </div>
        </InputLayout>
        <InputLayout id='notice-title' label='제목' isEssential={true}>
          <Textfield
            variant='default'
            id='notice-title'
            placeholder='공지 제목을 입력해주세요.'
            value={title}
            onChange={handleTitleChange}
          />
        </InputLayout>
        <InputLayout id='notice-description' label='내용' isEssential={true}>
          <Textarea
            id='notice-description'
            placeholder='공지 내용을 입력해주세요.'
            value={content}
            onChange={handleContentChange}
          />
        </InputLayout>
        <div className={styles.buttonContainer}>
          <CtaButton
            type='common'
            htmlType='submit'
            color='gray'
            disabled={!isValid}
          >
            완료
          </CtaButton>
        </div>
      </form>
    </>
  );
};

export default NoticeCreatePage;

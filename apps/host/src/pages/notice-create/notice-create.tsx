import { useMemo, useState } from 'react';
import { ChangeEvent } from 'react';

import { toast } from '@amp/ads-ui';
import {
  AddImageButton,
  CategoryButton,
  CheckButton,
  CtaButton,
} from '@amp/ads-ui';
import { PinIcon } from '@amp/ads-ui/icons';

import InputLayout from '@shared/ui/input/input-layout';

import * as styles from './notice-create.css';

const CATEGORIES = ['운영 시간', '입장 안내', 'MD', '이벤트', '퇴근길', '기타'];

const MOCK_PINNED_COUNT = 3;

const NoticeCreatePage = () => {
  const [isPinned, setIsPinned] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePinToggle = () => {
    if (!isPinned && MOCK_PINNED_COUNT >= 3) {
      toast.show(
        '상단 고정할 수 있는 공지 수를 초과했어요.',
        '기존 공지를 고정 해제한 후 시도해주세요.',
      );
      return;
    }

    setIsPinned((prev) => !prev);
  };

  const handleImageChange = (file: File | null) => {
    setImage(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    } else {
      setImageUrl('');
    }
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const isValid = useMemo(() => {
    return (
      selectedCategory !== '' &&
      title.trim().length > 0 &&
      content.trim().length > 0
    );
  }, [selectedCategory, title, content]);

  const handleSubmit = () => {
    if (!isValid) {
      return;
    }

    const formData = {
      isPinned,
      image,
      category: selectedCategory,
      title,
      content,
    };

    // TODO: API 전송 로직
  };

  return (
    <>
      <main className={styles.container}>
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
          <input
            id='notice-title'
            className={styles.input}
            placeholder='공지 제목을 입력해주세요.'
            value={title}
            onChange={handleTitleChange}
          />
        </InputLayout>
        <InputLayout id='notice-description' label='내용' isEssential={true}>
          <textarea
            id='notice-description'
            className={styles.textarea}
            placeholder='공지 내용을 입력해주세요.'
            value={content}
            onChange={handleContentChange}
          />
        </InputLayout>
      </main>
      <div className={styles.buttonContainer}>
        <CtaButton
          type='common'
          color='gray'
          onClick={handleSubmit}
          disabled={!isValid}
        >
          완료
        </CtaButton>
      </div>
    </>
  );
};

export default NoticeCreatePage;

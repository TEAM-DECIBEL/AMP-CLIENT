import { AddImageButton, CheckButton, CtaButton } from '@amp/ads-ui';
import { PinIcon } from '@amp/ads-ui/icons';

import InputLayout from '@shared/ui/input/input-layout';

import * as styles from './notice-create.css';

const NoticeCreatePage = () => {
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
          <CheckButton />
        </div>
        <InputLayout id='notice-image' label='공지 이미지' isEssential={false}>
          <AddImageButton imageUrl='' onFileChange={() => {}} />
        </InputLayout>
        <hr className={styles.divider} />
        <InputLayout id='category' label='카테고리' isEssential={true}>
          <input
            className={styles.input}
            placeholder='공지 제목을 입력해주세요.'
          />
        </InputLayout>
        <InputLayout id='notice-title' label='제목' isEssential={true}>
          <input
            className={styles.input}
            placeholder='공지 제목을 입력해주세요.'
          />
        </InputLayout>
        <InputLayout id='notice-description' label='내용' isEssential={true}>
          <textarea
            className={styles.textarea}
            placeholder='공지 내용을 입력해주세요.'
          />
        </InputLayout>
      </main>
      <div className={styles.buttonContainer}>
        <CtaButton type='common' color='gray' onClick={() => {}}>
          완료
        </CtaButton>
      </div>
    </>
  );
};

export default NoticeCreatePage;

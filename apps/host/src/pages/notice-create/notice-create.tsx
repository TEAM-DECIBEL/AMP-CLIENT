import { CheckButton } from '@amp/ads-ui';
import { PinIcon } from '@amp/ads-ui/icons';

import * as styles from './notice-create.css';

const NoticeCreatePage = () => {
  return (
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
    </main>
  );
};

export default NoticeCreatePage;

import { overlay } from 'overlay-kit';

import { CtaButton, Modal, RectButton } from '@amp/ads-ui';

import { MOCK_DATA } from '@shared/mocks/notice-details';

import * as styles from './notice-details.css';

const NoticeDetailsPage = () => {
  const handleAlertClick = () => {
    overlay.open(({ isOpen, close, unmount }) => (
      <Modal
        open={isOpen}
        onClose={() => {
          close();
          unmount();
        }}
      >
        <Modal.Panel>
          <Modal.Content>
            <Modal.Title>공지를 삭제하시겠어요?</Modal.Title>
          </Modal.Content>

          <Modal.Actions>
            <RectButton
              variant='secondary'
              onClick={() => {
                close();
                unmount();
              }}
            >
              취소
            </RectButton>
            <RectButton
              variant='primary'
              // TODO: 삭제 API 호출
              onClick={() => {
                close();
                unmount();
              }}
            >
              삭제
            </RectButton>
          </Modal.Actions>
        </Modal.Panel>
      </Modal>
    ));
  };

  return (
    <main className={styles.container}>
      <div className={styles.noticeDetail}>
        <img
          src={MOCK_DATA.imageUrl}
          alt={MOCK_DATA.title}
          className={styles.img}
        />
        <div className={styles.header}>
          <p className={styles.category}>
            주최 공지 {'>'} {MOCK_DATA.category}
          </p>
          <p className={styles.date}>{MOCK_DATA.createdAt}</p>
        </div>
        <div className={styles.contents}>
          <p className={styles.title}>{MOCK_DATA.title}</p>
          <p className={styles.text}>{MOCK_DATA.content}</p>
        </div>
      </div>
      <div className={styles.button}>
        <CtaButton type='icon' onClick={() => {}}>
          수정하기
        </CtaButton>
        <CtaButton
          type='icon'
          onClick={() => {
            handleAlertClick();
          }}
        >
          삭제하기
        </CtaButton>
      </div>
    </main>
  );
};

export default NoticeDetailsPage;

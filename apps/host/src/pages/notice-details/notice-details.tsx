import { overlay } from 'overlay-kit';

import { CtaButton, Modal, RectButton } from '@amp/ads-ui';
import { PenIcon, TrashIcon } from '@amp/ads-ui/icons';
import { NoticeDetailLayout } from '@amp/compositions';

import { MOCK_DATA } from '@shared/mocks/notice-details';

import * as styles from './notice-details.css';

const NoticeDetailsPage = () => {
  const handleDeleteClick = () => {
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
    <NoticeDetailLayout>
      <NoticeDetailLayout.Content data={MOCK_DATA} />
      <NoticeDetailLayout.Actions>
        {/* TODO: 수정하기 뷰 라우팅 */}
        <CtaButton
          type='icon'
          color='white'
          onClick={() => {}}
          className={styles.ctaButton}
        >
          <PenIcon />
          수정하기
        </CtaButton>
        <CtaButton
          type='icon'
          color='white'
          onClick={() => {
            handleDeleteClick();
          }}
          className={styles.ctaButton}
        >
          <TrashIcon />
          삭제하기
        </CtaButton>
      </NoticeDetailLayout.Actions>
    </NoticeDetailLayout>
  );
};

export default NoticeDetailsPage;

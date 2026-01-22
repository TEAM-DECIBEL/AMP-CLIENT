import { useQuery } from '@tanstack/react-query';
import { overlay } from 'overlay-kit';
import { useParams } from 'react-router';

import { CtaButton, Modal, RectButton } from '@amp/ads-ui';
import { PenIcon, TrashIcon } from '@amp/ads-ui/icons';
import { NoticeDetailLayout } from '@amp/compositions';

import { NOTICE_DETAIL_QUERY_OPTIONS } from '@features/notice-detail/query';

import * as styles from './notice-details.css';

const NoticeDetailsPage = () => {
  const { noticeId } = useParams<{ noticeId: string }>();
  const noticeIdNumber = Number(noticeId);

  const { data } = useQuery(NOTICE_DETAIL_QUERY_OPTIONS.DETAIL(noticeIdNumber));

  if (!data) {
    return null;
  }

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
      <NoticeDetailLayout.Content data={data} />
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

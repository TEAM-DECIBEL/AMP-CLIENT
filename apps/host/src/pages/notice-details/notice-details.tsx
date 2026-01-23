import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { overlay } from 'overlay-kit';
import { generatePath, useNavigate, useParams } from 'react-router';

import { CtaButton, Modal, RectButton, toast } from '@amp/ads-ui';
import { PenIcon, TrashIcon } from '@amp/ads-ui/icons';
import { Loading, NoticeDetailLayout } from '@amp/compositions';

import { useNoticeDeleteMutation } from '@features/notice/use-notice';
import { NOTICE_DETAIL_QUERY_OPTIONS } from '@features/notice-details/query';

import { ROUTE_PATH } from '@shared/constants/path';
import type { NoticeDetailResponse } from '@shared/types/notice-details-response';

import * as styles from './notice-details.css';

const NoticeDetailsPage = () => {
  const navigate = useNavigate();
  const { eventId, noticeId } = useParams();

  const handleEditClick = () => {
    if (!eventId || !noticeId) {
      return;
    }
    navigate(
      generatePath(ROUTE_PATH.NOTICE_EDIT, {
        eventId,
        noticeId,
      }),
    );
  };

  const noticeIdNumber = Number(noticeId);
  const { mutate: deleteNotice, isPending: isDeletePending } =
    useNoticeDeleteMutation(noticeIdNumber);

  const { data } = useQuery<
    NoticeDetailResponse,
    Error,
    NoticeDetailResponse,
    (string | number)[]
  >(NOTICE_DETAIL_QUERY_OPTIONS.DETAIL(noticeIdNumber));

  const { isPending } = useQuery(
    NOTICE_DETAIL_QUERY_OPTIONS.DETAIL(noticeIdNumber),
  );
  const normalizedData = useMemo(() => {
    if (!data) {
      return null;
    }

    return {
      ...data,
      imageUrl: data.imageUrl ?? '',
      category: data.category.categoryName,
    };
  }, [data]);

  if (!normalizedData) {
    return null;
  }

  if (isPending) {
    return <Loading />;
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
              disabled={isDeletePending}
              onClick={() => {
                deleteNotice(undefined, {
                  onSuccess: () => {
                    close();
                    unmount();
                    if (eventId) {
                      navigate(
                        ROUTE_PATH.NOTICE_LIST.replace(
                          ':eventId',
                          String(eventId),
                        ),
                      );
                    }
                  },
                  onError: () => {
                    toast.show('공지 삭제에 실패했어요.');
                  },
                });
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
      <NoticeDetailLayout.Content data={normalizedData} />
      <NoticeDetailLayout.Actions>
        <CtaButton
          type='icon'
          color='white'
          onClick={handleEditClick}
          className={styles.ctaButton}
        >
          <PenIcon />
          수정하기
        </CtaButton>
        <CtaButton
          type='icon'
          color='white'
          onClick={handleDeleteClick}
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

import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { CircleButton, CtaButton } from '@amp/ads-ui';
import { SaveIcon } from '@amp/ads-ui/icons';
import { NoticeDetailLayout } from '@amp/compositions';

import { useNoticeBookmark } from '@features/bookmark/query';
import { NOTICE_DETAIL_QUERY_OPTIONS } from '@features/notice-details/query';

import * as styles from './notice-details.css';

const NoticeDetailsPage = () => {
  const { noticeId } = useParams<{ noticeId: string }>();
  const noticeIdNumber = Number(noticeId);

  const { data } = useQuery(NOTICE_DETAIL_QUERY_OPTIONS.DETAIL(noticeIdNumber));
  const bookmarkMutation = useNoticeBookmark();

  const handleBookmark = () => {
    if (bookmarkMutation.isPending) {
      return;
    }
    if (!Number.isFinite(noticeIdNumber)) {
      return;
    }
    if (!data) {
      return;
    }

    bookmarkMutation.mutate({
      noticeId: noticeIdNumber,
      isBookmarked: !data.isSaved,
    });
  };

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

  const handleShare = async () => {
    if (
      typeof window === 'undefined' ||
      typeof navigator === 'undefined' ||
      !navigator.share
    ) {
      return;
    }

    const shareData = {
      text: `${normalizedData.title}\n${window.location.href}`,
    };

    try {
      await navigator.share(shareData);
    } catch {
      // 사용자 취소 등은 무시
    }
  };

  return (
    <NoticeDetailLayout>
      <NoticeDetailLayout.Content data={normalizedData} />
      <NoticeDetailLayout.Actions>
        <div>
          <CircleButton type='share' onClick={handleShare} />
        </div>
        <CtaButton
          type='icon'
          color='gray'
          onClick={handleBookmark}
          disabled={bookmarkMutation.isPending}
          className={!normalizedData.isSaved ? styles.unsaved : undefined}
        >
          <div>
            <SaveIcon
              className={
                !normalizedData.isSaved ? styles.unsavedIcon : undefined
              }
            />
          </div>
          저장하기
        </CtaButton>
      </NoticeDetailLayout.Actions>
    </NoticeDetailLayout>
  );
};

export default NoticeDetailsPage;

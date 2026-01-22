import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { CircleButton, CtaButton } from '@amp/ads-ui';
import { SaveIcon } from '@amp/ads-ui/icons';
import { NoticeDetailLayout } from '@amp/compositions';

import { useNoticeBookmark } from '@features/bookmark/query';
import { NOTICE_DETAIL_QUERY_OPTIONS } from '@features/notice-detail/query';

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

  if (!data) {
    return null;
  }

  return (
    <NoticeDetailLayout>
      <NoticeDetailLayout.Content data={data} />
      <NoticeDetailLayout.Actions>
        <div>
          <CircleButton type='share' onClick={() => {}} />
        </div>
        <CtaButton
          type='icon'
          color='gray'
          onClick={handleBookmark}
          className={!data.isSaved ? styles.unsaved : undefined}
        >
          <div>
            <SaveIcon
              className={!data.isSaved ? styles.unsavedIcon : undefined}
            />
          </div>
          저장하기
        </CtaButton>
      </NoticeDetailLayout.Actions>
    </NoticeDetailLayout>
  );
};

export default NoticeDetailsPage;

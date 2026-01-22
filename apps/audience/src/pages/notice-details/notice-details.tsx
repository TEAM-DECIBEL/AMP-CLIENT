import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { CircleButton, CtaButton } from '@amp/ads-ui';
import { SaveIcon } from '@amp/ads-ui/icons';
import { NoticeDetailLayout } from '@amp/compositions';

import { NOTICE_DETAIL_QUERY_OPTIONS } from '@features/notice-detail/query';

const NoticeDetailsPage = () => {
  const { noticeId } = useParams<{ noticeId: string }>();
  const noticeIdNumber = Number(noticeId);

  const { data } = useQuery(NOTICE_DETAIL_QUERY_OPTIONS.DETAIL(noticeIdNumber));

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
        <CtaButton type='icon' color='gray' onClick={() => {}}>
          <SaveIcon />
          저장하기
        </CtaButton>
      </NoticeDetailLayout.Actions>
    </NoticeDetailLayout>
  );
};

export default NoticeDetailsPage;

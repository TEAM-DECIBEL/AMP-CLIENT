import { CircleButton, CtaButton } from '@amp/ads-ui';
import { SaveIcon } from '@amp/ads-ui/icons';
import { NoticeDetailLayout } from '@amp/compositions';

import { useNoticeBookmark } from '@features/bookmark/query';

import { MOCK_DATA } from '@shared/mocks/notice-detail';

const NoticeDetailsPage = () => {
  const bookmarkMutation = useNoticeBookmark();

  const handleBookmark = () => {
    if (bookmarkMutation.isPending) {
      return;
    }
    bookmarkMutation.mutate(MOCK_DATA.id);
  };
  return (
    <NoticeDetailLayout>
      <NoticeDetailLayout.Content data={MOCK_DATA} />
      <NoticeDetailLayout.Actions>
        <div>
          <CircleButton type='share' onClick={() => {}} />
        </div>
        <CtaButton type='icon' color='gray' onClick={handleBookmark}>
          <SaveIcon />
          저장하기
        </CtaButton>
      </NoticeDetailLayout.Actions>
    </NoticeDetailLayout>
  );
};

export default NoticeDetailsPage;

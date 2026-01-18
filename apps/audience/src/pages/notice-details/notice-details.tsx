import { CircleButton, CtaButton } from '@amp/ads-ui';
import { SaveIcon } from '@amp/ads-ui/icons';
import { NoticeDetailLayout } from '@amp/compositions';

import { MOCK_DATA } from '@shared/mocks/notice-detail';

const NoticeDetailsPage = () => {
  return (
    <NoticeDetailLayout>
      <NoticeDetailLayout.Content data={MOCK_DATA} />
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

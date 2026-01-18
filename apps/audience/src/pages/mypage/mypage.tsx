import { useNavigate } from 'react-router';

import { MyPageLayout } from '@amp/shared';

import { ROUTE_PATH } from '@shared/constants/path';

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <MyPageLayout
      name='관객 이름'
      roleLabel='관객'
      menuItems={[
        {
          id: 'my-events',
          label: '내 관람 공연',
          onClick: () => navigate(`/${ROUTE_PATH.MY_EVENTS}`),
        },
        {
          id: 'saved-notices',
          label: '저장한 공지',
          onClick: () => navigate(`/${ROUTE_PATH.SAVED_NOTICES}`),
        },
      ]}
    />
  );
};

export default MyPage;

import { useNavigate } from 'react-router';

import { MyPageLayout } from '@amp/shared';

import { ROUTE_PATH } from '@shared/constants/path';

const MyPage = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      id: 'my-events',
      label: '내 관람 공연',
      path: `/${ROUTE_PATH.MY_EVENTS}`,
    },
    {
      id: 'saved-notices',
      label: '저장한 공지',
      path: `/${ROUTE_PATH.SAVED_NOTICES}`,
    },
  ] as const;

  return (
    <MyPageLayout
      name='관객 이름'
      roleLabel='관객'
      menuItems={menuItems.map((menu) => ({
        id: menu.id,
        label: menu.label,
        onClick: () => navigate(menu.path),
      }))}
    />
  );
};

export default MyPage;

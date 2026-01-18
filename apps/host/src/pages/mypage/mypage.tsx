import { useNavigate } from 'react-router';

import { MyPageLayout } from '@amp/shared';

import { ROUTE_PATH } from '@shared/constants/path';

const MyPage = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 'ongoing-events',
      label: '진행 공연',
      path: `/${ROUTE_PATH.MY_HISTORY}`,
    },
    {
      id: 'token-check',
      label: '토큰 확인',
      path: '',
    },
  ] as const;

  const handleMenuClick = (path: string) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <MyPageLayout
      name='공연주최사 이름'
      roleLabel='주최'
      menuItems={menuItems.map((menu) => ({
        id: menu.id,
        label: menu.label,
        onClick: () => handleMenuClick(menu.path),
      }))}
    />
  );
};

export default MyPage;

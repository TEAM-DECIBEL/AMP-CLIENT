import { useState } from 'react';
import { useNavigate } from 'react-router';

import { LogoutModal, MyPageLayout } from '@amp/shared';

import { ROUTE_PATH } from '@shared/constants/path';

const menuItems = [
  {
    id: 'my-events',
    label: '내 관람 공연',
    path: ROUTE_PATH.MY_EVENTS,
  },
  {
    id: 'saved-notices',
    label: '저장한 공지',
    path: `/${ROUTE_PATH.SAVED_NOTICES}`,
  },
] as const;

const MyPage = () => {
  const navigate = useNavigate();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const handleLogoutOpen = () => {
    setIsLogoutOpen(true);
  };
  const handleLogoutClose = () => {
    setIsLogoutOpen(false);
  };
  const handleLogoutConfirm = () => {
    setIsLogoutOpen(false);
  };

  return (
    <>
      <MyPageLayout
        name='관객 이름'
        roleLabel='관객'
        menuItems={menuItems.map((menu) => ({
          id: menu.id,
          label: menu.label,
          onClick: () => navigate(menu.path),
        }))}
        handleLogout={handleLogoutOpen}
      />
      <LogoutModal
        open={isLogoutOpen}
        onClose={handleLogoutClose}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
};

export default MyPage;

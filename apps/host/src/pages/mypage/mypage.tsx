import { useState } from 'react';
import { useNavigate } from 'react-router';

import { toast } from '@amp/ads-ui';
import { LogoutModal, MyPageLayout } from '@amp/shared';

import { ROUTE_PATH } from '@shared/constants/path';
import Dashboard from '@shared/ui/card/card-dashboard/dashboard';

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

const MyPage = () => {
  const navigate = useNavigate();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const dashboardCounts = {
    ongoingCount: 0,
    upcomingCount: 0,
  };

  const handleTokenCheck = () => {
    toast.show('현재 준비중인 기능이에요!');
  };
  const handleMenuItemClick = (menu: (typeof menuItems)[number]) => {
    if (menu.id === 'token-check') {
      handleTokenCheck();
      return;
    }
    handleMenuClick(menu.path);
  };
  const handleMenuClick = (path: string) => {
    if (path) {
      navigate(path);
    }
  };
  const setLogoutOpen = (open: boolean) => setIsLogoutOpen(open);

  return (
    <>
      <MyPageLayout
        name='공연주최사 이름'
        roleLabel='주최'
        dashboard={
          <Dashboard
            ongoingCount={dashboardCounts.ongoingCount}
            upcomingCount={dashboardCounts.upcomingCount}
          />
        }
        menuItems={menuItems.map((menu) => ({
          id: menu.id,
          label: menu.label,
          onClick: () => handleMenuItemClick(menu),
        }))}
        handleLogout={() => setLogoutOpen(true)}
      />
      <LogoutModal
        open={isLogoutOpen}
        onClose={() => setLogoutOpen(false)}
        onConfirm={() => setLogoutOpen(false)}
      />
    </>
  );
};

export default MyPage;

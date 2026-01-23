import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { toast } from '@amp/ads-ui';
import { Loading } from '@amp/compositions';
import { LogoutModal, MyPageLayout } from '@amp/shared';

import { postLogout } from '@features/auth/apis/query';
import { MY_PAGE_QUERY_OPTIONS } from '@features/mypage/apis/query';

import { ROUTE_PATH } from '@shared/constants/path';
import Dashboard from '@shared/ui/card/card-dashboard/dashboard';

const menuItems = [
  {
    id: 'ongoing-events',
    label: '진행 공연',
    path: ROUTE_PATH.MY_HISTORY,
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

  const { data: myPageData, isPending } = useQuery(
    MY_PAGE_QUERY_OPTIONS.MY_PAGE(),
  );
  const logoutMutation = useMutation({
    mutationFn: postLogout,
  });

  const isLogoutPending = logoutMutation.isPending;

  const isUiLocked = isLogoutPending;

  if (isPending) {
    return <Loading />;
  }

  if (!myPageData) {
    return null;
  }

  const dashboardCounts = {
    ongoingCount: myPageData.ongoingFestivalCount,
    upcomingCount: myPageData.upcomingFestivalCount,
  };

  const handleTokenCheck = () => {
    toast.show('현재 준비중인 기능이에요!');
  };

  const setLogoutOpen = (open: boolean) => setIsLogoutOpen(open);

  const handleLogoutConfirm = () => {
    if (isLogoutPending) {
      return;
    }
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        setLogoutOpen(false);
        navigate(ROUTE_PATH.LOGIN);
      },
      onError: () => {
        toast.show('로그아웃에 실패했어요.');
      },
    });
  };
  const handleMenuItemClick = (menu: (typeof menuItems)[number]) => {
    if (isUiLocked) {
      return;
    }
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

  return (
    <>
      <MyPageLayout
        name={myPageData.organizerName}
        roleLabel='주최'
        profileImageUrl={myPageData.profileImageUrl}
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
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
};

export default MyPage;

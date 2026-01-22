import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { toast } from '@amp/ads-ui';
import { Loading } from '@amp/compositions';
import { LogoutModal, MyPageLayout } from '@amp/shared';

import { postLogout } from '@features/auth/apis/query';
import { MY_PAGE_QUERY_OPTIONS } from '@features/mypage/apis/query';

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
    path: ROUTE_PATH.SAVED_NOTICES,
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
  const handleLogoutOpen = () => {
    setIsLogoutOpen(true);
  };
  const handleLogoutClose = () => {
    setIsLogoutOpen(false);
  };
  const handleLogoutConfirm = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        setIsLogoutOpen(false);
        navigate(ROUTE_PATH.LOGIN);
      },
      onError: () => {
        toast.show('로그아웃에 실패했어요.');
      },
    });
  };

  if (isPending) {
    return <Loading />;
  }

  if (!myPageData) {
    return null;
  }

  return (
    <>
      <MyPageLayout
        name={myPageData.nickname}
        roleLabel='관객'
        profileImageUrl={myPageData.profileImageUrl}
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

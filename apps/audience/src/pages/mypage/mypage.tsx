import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { Loading } from '@amp/compositions';
import { LogoutModal, MyPageLayout } from '@amp/shared';

import { MY_PAGE_QUERY_OPTIONS } from '@features/mypage/apis/query';

import { ROUTE_PATH } from '@shared/constants/path';

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

const MyPage = () => {
  const navigate = useNavigate();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const { data: myPageData, isPending } = useQuery(
    MY_PAGE_QUERY_OPTIONS.MY_PAGE(),
  );
  const handleLogoutOpen = () => {
    setIsLogoutOpen(true);
  };
  const handleLogoutClose = () => {
    setIsLogoutOpen(false);
  };
  const handleLogoutConfirm = () => {
    setIsLogoutOpen(false);
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

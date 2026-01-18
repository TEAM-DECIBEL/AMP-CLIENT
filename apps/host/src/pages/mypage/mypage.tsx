import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Modal, RectButton } from '@amp/ads-ui';
import { MyPageLayout } from '@amp/shared';

import { ROUTE_PATH } from '@shared/constants/path';
import Dashboard from '@shared/ui/card/card-dashboard/dashboard';

const MyPage = () => {
  const navigate = useNavigate();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

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

  const dashboardCounts = {
    ongoingCount: 0,
    upcomingCount: 0,
  };

  const handleMenuClick = (path: string) => {
    if (path) {
      navigate(path);
    }
  };
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
          onClick: () => handleMenuClick(menu.path),
        }))}
        onLogout={handleLogoutOpen}
      />
      <Modal open={isLogoutOpen} onClose={handleLogoutClose}>
        <Modal.Panel role='alertdialog'>
          <Modal.Content>
            <Modal.Title>로그아웃</Modal.Title>
            <Modal.Description>로그아웃 하시겠어요?</Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <RectButton variant='secondary' onClick={handleLogoutClose}>
              취소
            </RectButton>
            <RectButton variant='primary' onClick={handleLogoutConfirm}>
              로그아웃
            </RectButton>
          </Modal.Actions>
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default MyPage;

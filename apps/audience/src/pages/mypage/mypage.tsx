import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Modal, RectButton } from '@amp/ads-ui';
import { MyPageLayout } from '@amp/shared';

import { ROUTE_PATH } from '@shared/constants/path';

const MyPage = () => {
  const navigate = useNavigate();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
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

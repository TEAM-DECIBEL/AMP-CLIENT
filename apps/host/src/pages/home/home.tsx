import { overlay } from 'overlay-kit';

import { Modal, RectButton } from '@amp/ads-ui';

const HomePage = () => {
  const handleOpenModal = () => {
    overlay.open(({ isOpen, close, unmount }) => {
      const handleClose = () => {
        close();
        unmount();
      };

      return (
        <Modal
          open={isOpen}
          title='공지를 삭제하시겠어요?'
          description='삭제하면 복구할 수 없어요.'
          cancelText='취소'
          confirmText='삭제'
          onCancel={handleClose}
          onConfirm={handleClose}
        />
      );
    });
  };

  return (
    <div>
      <RectButton variant='primary' onClick={handleOpenModal}>
        모달
      </RectButton>
    </div>
  );
};

export default HomePage;

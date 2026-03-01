import { Modal, RectButton } from '@amp/ads-ui';

interface LogoutModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutModal = ({ open, onClose, onConfirm }: LogoutModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Panel role='alertdialog'>
        <Modal.Content>
          <Modal.Title>로그아웃</Modal.Title>
          <Modal.Description>로그아웃 하시겠어요?</Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <RectButton variant='secondary' onClick={onClose}>
            취소
          </RectButton>
          <RectButton variant='primary' onClick={onConfirm}>
            로그아웃
          </RectButton>
        </Modal.Actions>
      </Modal.Panel>
    </Modal>
  );
};

export default LogoutModal;

import { useState } from 'react';
import type { ReactNode } from 'react';

import { Modal, OptionSheet, RectButton } from '@amp/ads-ui';

interface FestivalActionsProps {
  children: (onOpenOptionSheet: () => void) => ReactNode;
}

const FestivalActions = ({ children }: FestivalActionsProps) => {
  const [isOptionSheetOpen, setIsOptionSheetOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleOpenOptionSheet = () => {
    setIsOptionSheetOpen(true);
  };

  const handleCloseOptionSheet = () => {
    setIsOptionSheetOpen(false);
  };

  const handleOpenDeleteModal = () => {
    setIsOptionSheetOpen(false);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      {children(handleOpenOptionSheet)}
      <OptionSheet open={isOptionSheetOpen} onClose={handleCloseOptionSheet}>
        <OptionSheet.Item onClick={handleCloseOptionSheet}>
          수정하기
        </OptionSheet.Item>
        <OptionSheet.Item onClick={handleOpenDeleteModal}>
          삭제하기
        </OptionSheet.Item>
      </OptionSheet>
      <Modal open={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
        <Modal.Panel role='alertdialog'>
          <Modal.Content>
            <Modal.Title>공연을 삭제할까요?</Modal.Title>
            <Modal.Description>
              삭제한 공연은 복구할 수 없어요.
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <RectButton variant='secondary' onClick={handleCloseDeleteModal}>
              취소
            </RectButton>
            <RectButton variant='primary' onClick={handleConfirmDelete}>
              삭제하기
            </RectButton>
          </Modal.Actions>
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default FestivalActions;

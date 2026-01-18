import type { ReactNode } from 'react';

import { Modal, OptionSheet, RectButton } from '@amp/ads-ui';

interface FestivalActionsViewProps {
  children: ReactNode;
  isOptionSheetOpen: boolean;
  isDeleteModalOpen: boolean;
  onCloseOptionSheet: () => void;
  onOpenDeleteModal: () => void;
  onCloseDeleteModal: () => void;
  onEdit: () => void;
  onConfirmDelete: () => void;
}

const FestivalActionsView = ({
  children,
  isOptionSheetOpen,
  isDeleteModalOpen,
  onCloseOptionSheet,
  onOpenDeleteModal,
  onCloseDeleteModal,
  onEdit,
  onConfirmDelete,
}: FestivalActionsViewProps) => {
  return (
    <>
      {children}
      <OptionSheet open={isOptionSheetOpen} onClose={onCloseOptionSheet}>
        <OptionSheet.Item onClick={onEdit}>
          수정하기
        </OptionSheet.Item>
        <OptionSheet.Item onClick={onOpenDeleteModal}>
          삭제하기
        </OptionSheet.Item>
      </OptionSheet>
      <Modal open={isDeleteModalOpen} onClose={onCloseDeleteModal}>
        <Modal.Panel role='alertdialog'>
          <Modal.Content>
            <Modal.Title>공연을 삭제할까요?</Modal.Title>
            <Modal.Description>
              삭제한 공연은 복구할 수 없어요.
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <RectButton variant='secondary' onClick={onCloseDeleteModal}>
              취소
            </RectButton>
            <RectButton variant='primary' onClick={onConfirmDelete}>
              삭제하기
            </RectButton>
          </Modal.Actions>
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default FestivalActionsView;

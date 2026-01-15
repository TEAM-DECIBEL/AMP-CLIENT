import { useState } from 'react';

import { Modal, OptionSheet, RectButton } from '@amp/ads-ui';

import type { Festival } from '@shared/types/home-response';

import FestivalStatusSection from './festival-status-section';

import * as styles from './festival-status.css';

interface FestivalStatusProps {
  ongoingCount: number;
  upcomingCount: number;
  ongoingFestivals: Festival[];
  upcomingFestivals: Festival[];
}

const FestivalStatus = ({
  ongoingCount,
  upcomingCount,
  ongoingFestivals,
  upcomingFestivals,
}: FestivalStatusProps) => {
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

  const sections = [
    {
      title: '진행 중인 공연',
      count: ongoingCount,
      festivals: ongoingFestivals,
      emptyText: '진행 중인 공연이 없어요!',
    },
    {
      title: '진행 예정 공연',
      count: upcomingCount,
      festivals: upcomingFestivals,
      emptyText: '진행 예정인 공연이 없어요!',
    },
  ] as const;

  return (
    <div className={styles.container}>
      {sections.map((section) => (
        <FestivalStatusSection
          key={section.title}
          {...section}
          onMoreClick={handleOpenOptionSheet}
        />
      ))}
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
            <Modal.Title>공연을 삭제하시겠어요?</Modal.Title>
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
    </div>
  );
};

export default FestivalStatus;

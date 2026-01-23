import { useState } from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router';

import FestivalActionsView from '@widgets/home/festival-actions/festival-actions';

interface FestivalActionsProps {
  children: (onOpenOptionSheet: (festivalId: number) => void) => ReactNode;
  onEdit?: (festivalId: number) => void;
  onDelete?: (festivalId: number) => void;
}

const FestivalActions = ({
  children,
  onEdit,
  onDelete,
}: FestivalActionsProps) => {
  const [isOptionSheetOpen, setIsOptionSheetOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedFestivalId, setSelectedFestivalId] = useState<number | null>(
    null,
  );

  const handleOpenOptionSheet = (festivalId: number) => {
    setSelectedFestivalId(festivalId);
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

  const handleEdit = () => {
    if (selectedFestivalId !== null) {
      onEdit?.(selectedFestivalId);
    }
    setIsOptionSheetOpen(false);
  };

  const handleConfirmDelete = () => {
    if (selectedFestivalId !== null) {
      onDelete?.(selectedFestivalId);
    }
    setIsDeleteModalOpen(false);
  };

  return (
    <FestivalActionsView
      isOptionSheetOpen={isOptionSheetOpen}
      isDeleteModalOpen={isDeleteModalOpen}
      onCloseOptionSheet={handleCloseOptionSheet}
      onOpenDeleteModal={handleOpenDeleteModal}
      onCloseDeleteModal={handleCloseDeleteModal}
      onEdit={handleEdit}
      onConfirmDelete={handleConfirmDelete}
    >
      {children(handleOpenOptionSheet)}
    </FestivalActionsView>
  );
};

export default FestivalActions;

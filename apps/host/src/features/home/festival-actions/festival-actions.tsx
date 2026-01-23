import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { ReactNode } from 'react';

import FestivalActionsView from '@widgets/home/festival-actions/festival-actions';

import { deleteFestival } from '@features/home/apis/query';

import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';
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
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationKey: ORGANIZERS_QUERY_KEY.FESTIVAL_DELETE(0),
    mutationFn: (festivalId: number) => deleteFestival(festivalId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ORGANIZERS_QUERY_KEY.HOME_FESTIVALS(),
      });
      queryClient.invalidateQueries({
        queryKey: ORGANIZERS_QUERY_KEY.MY_FESTIVALS_ALL(),
      });
    },
  });
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
      deleteMutation.mutate(selectedFestivalId, {
        onSuccess: () => {
          onDelete?.(selectedFestivalId);
        },
      });
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

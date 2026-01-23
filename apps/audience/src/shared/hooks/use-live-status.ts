import { useMemo, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import type { StatusSheetValue } from '@amp/ads-ui';
import { toast } from '@amp/ads-ui';

import {
  type CongestionLevel,
  postStageCongestion,
} from '@features/congestion/query';
import { CONGESTION_QUERY_OPTIONS } from '@features/notice-details/query';

type LiveStatusItem = {
  stageId: number;
  title: string;
  location: string;
  congestionLevel: string;
};

const toCongestionLevel = (value: StatusSheetValue): CongestionLevel => {
  if (value === 'SMOOTH' || value === 'NORMAL' || value === 'CROWDED') {
    return value;
  }
  throw new Error(`Unknown StatusSheetValue: ${String(value)}`);
};

export const useLiveStatus = () => {
  const { eventId: eventIdParam } = useParams<{ eventId: string }>();
  const eventId = Number(eventIdParam);

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sheetTitle, setSheetTitle] = useState('');
  const [status, setStatus] = useState<StatusSheetValue | undefined>(undefined);
  const [stageId, setStageId] = useState<number | null>(null);

  const { data } = useQuery(
    CONGESTION_QUERY_OPTIONS.STAGES(eventId, { page: 0, size: 10 }),
  );

  const statusItems: LiveStatusItem[] = useMemo(
    () =>
      data?.stages.map((stage) => ({
        stageId: stage.stageId,
        title: stage.title,
        location: stage.location,
        congestionLevel: String(stage.congestionLevel),
      })) ?? [],
    [data],
  );

  const isAvailableTime = data?.isInputAvailable;

  const congestionMutation = useMutation({
    mutationFn: ({
      stageId,
      congestion,
    }: {
      stageId: number;
      congestion: CongestionLevel;
    }) => postStageCongestion(stageId, congestion),

    onSuccess: () => {
      toast.show('선택하신 현장 상황이 반영되었어요.');
    },
    onError: () => {
      toast.show(
        '현장 상황은 15분에 한 번씩만 입력할 수 있어요.',
        '15분 후 다시 시도해주세요.',
      );
    },
  });

  const openStatusSheet = (targetStageId: number) => {
    const targetItem = statusItems.find(
      (item) => item.stageId === targetStageId,
    );
    if (!targetItem) {
      return;
    }

    setSheetTitle(targetItem.title);
    setStageId(targetStageId);
    setIsSheetOpen(true);
  };

  const closeStatusSheet = () => setIsSheetOpen(false);

  const confirmStatus = (value: StatusSheetValue) => {
    setStatus(value);

    if (stageId == null) {
      toast.show('무대 정보를 찾을 수 없어요. 다시 시도해주세요.');
      return;
    }

    if (!isAvailableTime) {
      toast.show('현장 상황은 15분에 한 번씩만 입력할 수 있어요.');
      return;
    }

    if (congestionMutation.isPending) {
      return;
    }

    const congestion = toCongestionLevel(value);
    congestionMutation.mutate({ stageId, congestion });
    closeStatusSheet();
  };

  return {
    statusItems,
    isSheetOpen,
    sheetTitle,
    status,
    isAvailableTime,
    openStatusSheet,
    closeStatusSheet,
    confirmStatus,
  };
};

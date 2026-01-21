import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { toast } from '@amp/ads-ui';
import { StatusSheetValue } from '@amp/ads-ui';

import { CONGESTION_QUERY_OPTIONS } from '@features/notice-details/query';

type LiveStatusItem = {
  id: number;
  title: string;
  location: string;
  congestionLevel: StatusSheetValue;
};

export const useLiveStatus = () => {
  const { eventId: eventIdParam } = useParams<{ eventId: string }>();
  const eventId = Number(eventIdParam);

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sheetTitle, setSheetTitle] = useState('');
  const [status, setStatus] = useState<StatusSheetValue | undefined>(undefined);

  const { data } = useQuery(
    CONGESTION_QUERY_OPTIONS.STAGES(eventId, { page: 0, size: 10 }),
  );

  const statusItems: LiveStatusItem[] = useMemo(
    () =>
      data?.stages.map((stage) => ({
        id: stage.stageId,
        title: stage.title,
        location: stage.location,
        congestionLevel: stage.congestionLevel,
      })) ?? [],
    [data],
  );

  const isAvailableTime = data?.isInputAvailable ?? false;

  const openStatusSheet = (id: number) => {
    const targetItem = statusItems.find((item) => item.id === id);
    if (!targetItem) {
      return;
    }

    setSheetTitle(targetItem.title ?? '');
    setIsSheetOpen(true);
  };

  const closeStatusSheet = () => setIsSheetOpen(false);

  // TODO: 토스트는 추후 서버 에러 활용 분기 처리. 현재 임시 구조
  const confirmStatus = (value: StatusSheetValue) => {
    setStatus(value);
    toast.show('선택하신 현장 상황이 반영되었어요.');
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

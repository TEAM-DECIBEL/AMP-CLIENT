import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { toast } from '@amp/ads-ui';
import { StatusSheetValue } from '@amp/ads-ui';

import {
  type CongestionLevel,
  postStageCongestion,
} from '@features/congestion/query';

import { LIVE_STATUS_MOCK } from '@shared/mocks/current';

const toCongestionLevel = (value: StatusSheetValue): CongestionLevel => {
  if (value === 'SMOOTH' || value === 'NORMAL' || value === 'CROWDED') {
    return value;
  }

  throw new Error(`Unknown StatusSheetValue: ${String(value)}`);
};

export default () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sheetTitle, setSheetTitle] = useState('');
  const [status, setStatus] = useState<StatusSheetValue | undefined>(undefined);

  const [stageId, setStageId] = useState<number | null>(null);

  // TODO: 8시간 이내 현장 상황 입력 불가 관리 테스트용 임시 상태 삭제
  const [isAvailableTime] = useState(true);

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

  const openStatusSheet = (id: number) => {
    const targetItem = LIVE_STATUS_MOCK.find((item) => item.stageId === id);
    if (!targetItem) {
      return;
    }

    setSheetTitle(targetItem.title ?? '');
    setIsSheetOpen(true);

    setStageId(id);
  };

  const closeStatusSheet = () => setIsSheetOpen(false);

  const confirmStatus = (value: StatusSheetValue) => {
    setStatus(value);

    if (stageId == null) {
      toast.show('무대 정보를 찾을 수 없어요. 다시 시도해주세요.');
      return;
    }

    if (congestionMutation.isPending) {
      return;
    }

    const congestion = toCongestionLevel(value);
    congestionMutation.mutate({ stageId, congestion });
  };

  return {
    statusItems: LIVE_STATUS_MOCK,
    isSheetOpen,
    sheetTitle,
    status,
    isAvailableTime,
    openStatusSheet,
    closeStatusSheet,
    confirmStatus,
  };
};

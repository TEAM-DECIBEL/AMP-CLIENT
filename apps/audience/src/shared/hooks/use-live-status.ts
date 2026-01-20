import { useState } from 'react';

import { toast } from '@amp/ads-ui';
import { StatusSheetValue } from '@amp/ads-ui';

import { LIVE_STATUS_MOCK } from '@shared/mocks/current';

export const useLiveStatus = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sheetTitle, setSheetTitle] = useState('');
  const [status, setStatus] = useState<StatusSheetValue | undefined>(undefined);

  // TODO: 8시간 이내 현장 상황 입력 불가 관리 테스트용 임시 상태 삭제
  const [isAvailableTime] = useState(true);

  const openStatusSheet = (id: number) => {
    const targetItem = LIVE_STATUS_MOCK.find((item) => item.id === id);
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

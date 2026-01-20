import { useState } from 'react';

export const useNoticeAlert = () => {
  // TODO: 서버 데이터 연동, 현재는 state 활용
  const [isAlertOn, setIsAlertOn] = useState(false);

  const toggleAlert = async () => {
    // TODO: 여기서 API 호출 로직 추가

    const nextState = !isAlertOn;
    setIsAlertOn(nextState);

    return nextState;
  };

  return { toggleAlert };
};

export const CATEGORIES = [
  { id: 1, label: '운영 시간' },
  { id: 2, label: '입장 안내' },
  { id: 3, label: 'MD' },
  { id: 4, label: '이벤트' },
  { id: 5, label: '퇴근길' },
  { id: 6, label: '기타' },
] as const;

export const getCategoryIdByLabel = (label: string): number | null => {
  const match = CATEGORIES.find((category) => category.label === label);
  return match ? match.id : null;
};

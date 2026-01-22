export const CATEGORIES = [
  { id: 0, label: '전체', code: 'ALL' },
  { id: 1, label: '운영 시간', code: 'OPERATING_HOURS' },
  { id: 2, label: '입장 안내', code: 'ADMISSION_GUIDE' },
  { id: 3, label: 'MD', code: 'MD_GOODS' },
  { id: 4, label: '이벤트', code: 'EVENT' },
  { id: 5, label: '퇴근길', code: 'EXIT_PATH' },
  { id: 6, label: '기타', code: 'OTHERS' },
] as const;

export const CATEGORY_CODE_BY_LABEL = Object.fromEntries(
  CATEGORIES.map(({ label, code }) => [label, code]),
) as Record<(typeof CATEGORIES)[number]['label'], (typeof CATEGORIES)[number]['code']>;


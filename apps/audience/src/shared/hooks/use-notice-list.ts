import { useMemo, useState } from 'react';

import { CATEGORIES, CategoryType } from '@amp/compositions';

import { MOCK_DATA } from '@shared/mocks/notice-list';

export const useNoticeList = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    CATEGORIES[0],
  );

  // TODO: API 호출 로직으로 대체

  const notices = MOCK_DATA;

  const handleChipClick = (category: CategoryType) => {
    setSelectedCategory(category);
  };

  const sortedList = useMemo(() => {
    const filtered =
      selectedCategory === '전체'
        ? notices
        : notices.filter((item) => item.categoryName === selectedCategory);

    return [...filtered].sort((a, b) => {
      if (a.isPinned !== b.isPinned) {
        return a.isPinned ? -1 : 1;
      }
      return 0;
    });
  }, [selectedCategory, notices]);

  return {
    selectedCategory,
    setSelectedCategory,
    handleChipClick,
    noticeList: sortedList,
  };
};

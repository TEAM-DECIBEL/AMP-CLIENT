import { useMemo, useState } from 'react';

import { ALL_CATEGORY, type CategoryType, type Notice } from '../types/notice';

interface UseNoticeListReturn {
  categories: CategoryType[];
  selectedCategory: CategoryType;
  handleChipClick: (category: CategoryType) => void;
  noticeList: Notice[];
}

export const useNoticeList = (
  notices: Notice[] = [],
  activeCategories: CategoryType[] = [],
): UseNoticeListReturn => {
  const categories = useMemo<CategoryType[]>(() => {
    const uniq = Array.from(new Set(activeCategories));
    return [ALL_CATEGORY, ...uniq.filter((c) => c !== ALL_CATEGORY)];
  }, [activeCategories]);

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    () => categories[0] ?? ALL_CATEGORY,
  );

  const handleChipClick = (category: CategoryType) => {
    setSelectedCategory(category);
  };

  const noticeList = useMemo(() => {
    const filtered =
      selectedCategory === ALL_CATEGORY
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
    categories,
    selectedCategory,
    handleChipClick,
    noticeList,
  };
};

import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router';

import { toast } from '@amp/ads-ui';

import {
  useNoticeCreateMutation,
  useNoticeUpdateMutation,
} from '@features/notice/use-notice';

import { getCategoryIdByLabel } from '@shared/constants/category';
import { ROUTE_PATH } from '@shared/constants/path';
import type { NoticeDetail } from '@shared/types/notice';

export const useNoticeForm = (
  festivalId: number | null,
  initialData?: NoticeDetail | null,
  noticeId?: number | null,
  pinnedCount = 0,
  pinnedCountReady = false,
) => {
  const navigate = useNavigate();
  const initialCategoryId = initialData
    ? getCategoryIdByLabel(initialData.category.categoryName)
    : null;
  const [isPinned, setIsPinned] = useState(
    () => initialData?.isPinned ?? false,
  );
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState(() => initialData?.imageUrl ?? '');
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    () => initialCategoryId,
  );
  const [title, setTitle] = useState(() => initialData?.title ?? '');
  const [content, setContent] = useState(() => initialData?.content ?? '');
  const { mutate: createNotice, isPending: isCreatePending } =
    useNoticeCreateMutation(festivalId ?? 0);
  const { mutate: updateNotice, isPending: isUpdatePending } =
    useNoticeUpdateMutation(noticeId ?? 0);
  const handlePinToggle = () => {
    if (
      !isPinned &&
      pinnedCountReady &&
      pinnedCount >= 3 &&
      !initialData?.isPinned
    ) {
      toast.show(
        '상단 고정할 수 있는 공지 수를 초과했어요.',
        '기존 공지를 고정 해제한 후 시도해주세요.',
      );
      return;
    }
    setIsPinned((prev) => !prev);
  };

  const handleImageChange = (file: File | null) => {
    setImage(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    } else {
      setImageUrl('');
    }
  };

  useEffect(() => {
    return () => {
      if (imageUrl.startsWith('blob:')) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  const handleCategoryClick = (categoryId: number) =>
    setSelectedCategoryId(categoryId);

  const isValid =
    selectedCategoryId !== null &&
    title.trim().length > 0 &&
    content.trim().length > 0;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCreatePending || isUpdatePending) {
      return;
    }
    if (!isValid) {
      return;
    }
    if (!festivalId) {
      toast.show('공연 정보를 찾을 수 없어요.', '잠시 후 다시 시도해주세요.');
      return;
    }
    if (selectedCategoryId === null) {
      return;
    }
    if (isPinned && !initialData?.isPinned) {
      if (!pinnedCountReady) {
        toast.show('공지 목록을 불러오는 중이에요.', '잠시 후 다시 시도해주세요.');
        return;
      }
      if (pinnedCount >= 3) {
        toast.show(
          '상단 고정할 수 있는 공지 수를 초과했어요.',
          '기존 공지를 고정 해제한 후 시도해주세요.',
        );
        return;
      }
    }

    if (noticeId) {
      const shouldUsePreviousImage =
        !image && imageUrl && !imageUrl.startsWith('blob:');
      updateNotice(
        {
          festivalId,
          title,
          categoryId: selectedCategoryId,
          newImage: image,
          content,
          isPinned,
          previousImageUrl: shouldUsePreviousImage ? imageUrl : undefined,
        },
        {
          onSuccess: () => {
            navigate(
              ROUTE_PATH.NOTICE_LIST.replace(':eventId', String(festivalId)),
            );
          },
          onError: () => {
            toast.show('공지 수정에 실패했어요.');
          },
        },
      );
      return;
    }

    createNotice(
      {
        title,
        categoryId: selectedCategoryId,
        image,
        content,
        isPinned,
      },
      {
        onSuccess: () => {
          navigate(
            ROUTE_PATH.NOTICE_LIST.replace(':eventId', String(festivalId)),
          );
        },
        onError: () => {
          toast.show('공지 작성에 실패했어요.');
        },
      },
    );
  };

  return {
    formState: {
      isPinned,
      image,
      imageUrl,
      selectedCategoryId,
      title,
      content,
    },
    handlers: {
      handlePinToggle,
      handleImageChange,
      handleTitleChange,
      handleContentChange,
      handleCategoryClick,
      handleSubmit,
    },
    isValid,
    isSubmitting: isCreatePending || isUpdatePending,
  };
};

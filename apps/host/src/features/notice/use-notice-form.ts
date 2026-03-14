import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import type { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router';

import { toast } from '@amp/ads-ui';

import { getCategoryIdByLabel } from '@shared/constants/category';
import { ROUTE_PATH } from '@shared/constants/path';
import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';
import type { NoticeDetail } from '@shared/types/notice';

import { useImageUpload } from './use-image-upload';
import { useNoticeCreateMutation, useNoticeUpdateMutation } from './use-notice';

export const useNoticeForm = (
  festivalId: number,
  initialData?: NoticeDetail | null,
  noticeId?: number,
  pinnedCount = 0,
) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { images, handleImagesAdd, handleImageRemove } = useImageUpload(
    initialData?.imageUrls,
  );

  const [form, setForm] = useState({
    title: initialData?.title ?? '',
    content: initialData?.content ?? '',
    categoryId: initialData
      ? getCategoryIdByLabel(initialData.category.categoryName)
      : null,
    isPinned: initialData?.isPinned ?? false,
  });

  const { mutate: createNotice, isPending: isCreatePending } =
    useNoticeCreateMutation(festivalId);

  const { mutate: updateNotice, isPending: isUpdatePending } =
    useNoticeUpdateMutation(noticeId as number);

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryClick = (categoryId: number) =>
    setForm((prev) => ({ ...prev, categoryId }));

  const handlePinToggle = () => {
    setForm((prev) => ({ ...prev, isPinned: !prev.isPinned }));
  };

  const isValid =
    form.categoryId !== null &&
    form.title.trim().length > 0 &&
    form.content.trim().length > 0;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      isCreatePending ||
      isUpdatePending ||
      !isValid ||
      !festivalId ||
      form.categoryId === null
    ) {
      return;
    }

    if (form.isPinned && !initialData?.isPinned) {
      if (pinnedCount >= 3) {
        toast.show(
          '상단 고정할 수 있는 공지 수를 초과했어요.',
          '기존 공지를 고정 해제한 후 시도해주세요.',
        );
        return;
      }
    }

    const newImages: File[] = [];
    const keepImageUrls: string[] = [];
    images.forEach((img) =>
      img.type === 'new'
        ? newImages.push(img.file)
        : keepImageUrls.push(img.url),
    );

    const { title, content, isPinned, categoryId } = form;

    // TODO: 빌더 사용하도록 수정
    const navigateToList = () =>
      navigate(ROUTE_PATH.NOTICE_LIST.replace(':eventId', String(festivalId)));

    if (noticeId) {
      updateNotice(
        {
          festivalId,
          title,
          categoryId,
          content,
          isPinned,
          keepImageUrls,
          newImages: newImages.length > 0 ? newImages : undefined,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ORGANIZERS_QUERY_KEY.NOTICE_DETAIL(noticeId),
            });

            navigateToList();
          },
          onError: () => toast.show('공지 수정에 실패했어요.'),
        },
      );
      return;
    }

    createNotice(
      {
        title,
        categoryId,
        content,
        isPinned,
        images: newImages.length > 0 ? newImages : undefined,
      },
      {
        onSuccess: navigateToList,
        onError: () => toast.show('공지 작성에 실패했어요.'),
      },
    );
  };

  return {
    formState: { ...form, images },
    handlers: {
      handlePinToggle,
      handleImagesAdd,
      handleImageRemove,
      handleFormChange,
      handleCategoryClick,
      handleSubmit,
    },
    isValid,
    isSubmitting: isCreatePending || isUpdatePending,
  };
};

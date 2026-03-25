import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import type { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router';

import { toast } from '@amp/ads-ui';

import type { NoticeDetail } from '@entities/notice/types/notice';

import { getCategoryIdByLabel } from '@shared/constants/category';
import { NAV_PATH } from '@shared/constants/path';
import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';

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
  const { images, handleImagesAdd, handleImageRemove, isCompressing } =
    useImageUpload(initialData?.imageUrls);

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

  const executeSubmit = (
    newImages: File[],
    keepImageUrls: string[],
    categoryId: number,
  ) => {
    const commonData = {
      title: form.title,
      content: form.content,
      isPinned: form.isPinned,
      categoryId,
    };

    const onSuccess = () => {
      if (noticeId) {
        queryClient.invalidateQueries({
          queryKey: ORGANIZERS_QUERY_KEY.NOTICE_DETAIL(noticeId),
        });
      }
      queryClient.invalidateQueries({
        queryKey: ORGANIZERS_QUERY_KEY.FESTIVAL_NOTICES(festivalId),
      });
      navigate(NAV_PATH.noticeList(festivalId));
    };

    if (noticeId) {
      updateNotice(
        {
          ...commonData,
          festivalId,
          keepImageUrls,
          newImages: newImages.length > 0 ? newImages : undefined,
        },
        { onSuccess, onError: () => toast.show('공지 수정에 실패했어요.') },
      );
    } else {
      createNotice(
        { ...commonData, images: newImages.length > 0 ? newImages : undefined },
        { onSuccess, onError: () => toast.show('공지 작성에 실패했어요.') },
      );
    }
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
      isCompressing ||
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

    images.forEach((img) => {
      if (img.type === 'new') {
        newImages.push(img.file);
      } else {
        keepImageUrls.push(img.url);
      }
    });

    executeSubmit(newImages, keepImageUrls, form.categoryId);
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
    isSubmitting: isCreatePending || isUpdatePending || isCompressing,
  };
};

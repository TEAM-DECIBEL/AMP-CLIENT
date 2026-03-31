import { useEffect, useRef, useState } from 'react';

import { toast } from '@amp/ads-ui';

import { compressImageFiles } from '@shared/libs/image-compress';

const MAX_COUNT = 20;
const MAX_FILE_SIZE = 5 * 1024 * 1024;

export interface ExistingImage {
  type: 'existing';
  url: string;
}
export interface NewImage {
  type: 'new';
  id: string;
  file: File;
  previewUrl: string;
}
export type NoticeImageItem = ExistingImage | NewImage;

export const useImageUpload = (initialUrls: string[] = []) => {
  const [images, setImages] = useState<NoticeImageItem[]>(() =>
    initialUrls.map((url) => ({ type: 'existing', url })),
  );

  const [isCompressing, setIsCompressing] = useState(false);
  const compressingTaskCountRef = useRef(0);
  const blobUrlsRef = useRef<Set<string>>(new Set());

  const handleImagesAdd = async (files: File[]) => {
    const currentCount = images.length;
    const availableSpace = MAX_COUNT - currentCount;
    let hasLargeFile = false;

    if (availableSpace <= 0) {
      toast.show('이미지 첨부는 최대 20장까지 가능해요.');
      return;
    }

    const validFiles = files.filter((file) => {
      if (file.size > MAX_FILE_SIZE) {
        hasLargeFile = true;
        return false;
      }
      return true;
    });

    if (hasLargeFile) {
      toast.show('이미지 파일은 최대 5MB까지 첨부할 수 있어요.');
    }

    if (validFiles.length > availableSpace) {
      toast.show(`이미지 첨부는 최대 20장까지 가능해요`);
    }

    const filesToAdd = validFiles.slice(0, availableSpace);
    if (filesToAdd.length === 0) {
      return;
    }

    const newItems: NewImage[] = filesToAdd.map((file) => {
      const previewUrl = URL.createObjectURL(file);
      blobUrlsRef.current.add(previewUrl);
      return {
        type: 'new',
        id: crypto.randomUUID(),
        file,
        previewUrl,
      };
    });

    setImages((prev) => [...prev, ...newItems]);
    compressingTaskCountRef.current += 1;
    setIsCompressing(true);

    try {
      const targets = newItems.map((item) => ({
        id: item.id,
        file: item.file,
      }));
      const compressedResults = await compressImageFiles(targets);

      setImages((prev) =>
        prev.map((image) => {
          if (image.type === 'new') {
            const compressedItem = compressedResults.find(
              (item) => item.id === image.id,
            );
            if (compressedItem) {
              return { ...image, file: compressedItem.file };
            }
          }
          return image;
        }),
      );
    } catch {
      toast.show('이미지 업로드 중 오류가 발생했습니다.');
    } finally {
      compressingTaskCountRef.current = Math.max(
        0,
        compressingTaskCountRef.current - 1,
      );
      setIsCompressing(compressingTaskCountRef.current > 0);
    }
  };

  const handleImageRemove = (indexToRemove: number) => {
    const target = images[indexToRemove];

    if (target?.type === 'new') {
      URL.revokeObjectURL(target.previewUrl);
      blobUrlsRef.current.delete(target.previewUrl);
    }

    setImages((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  useEffect(() => {
    const currentBlobUrls = blobUrlsRef.current;

    return () => {
      currentBlobUrls.forEach((url) => {
        URL.revokeObjectURL(url);
      });
      currentBlobUrls.clear();
    };
  }, []);

  return { images, handleImagesAdd, handleImageRemove, isCompressing };
};

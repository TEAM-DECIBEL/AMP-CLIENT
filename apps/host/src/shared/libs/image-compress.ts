import imageCompression from 'browser-image-compression';

export interface CompressTargetImage {
  id: string;
  file: File;
}

export const compressImageFiles = async (
  items: CompressTargetImage[],
): Promise<CompressTargetImage[]> => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  return Promise.all(
    items.map(async (item) => {
      try {
        const compressedBlob = await imageCompression(item.file, options);
        const compressedFile = new File([compressedBlob], item.file.name, {
          type: compressedBlob.type,
        });
        return { id: item.id, file: compressedFile };
      } catch {
        return { id: item.id, file: item.file };
      }
    }),
  );
};

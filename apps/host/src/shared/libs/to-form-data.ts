export type FormDataValue = string | Blob;

export const toFormData = (record: Record<string, FormDataValue>) => {
  const fd = new FormData();

  Object.entries(record).forEach(([key, value]) => {
    fd.append(key, value);
  });

  return fd;
};

import { toFormData } from '@shared/libs/to-form-data';
import type { EventFormSubmitValues } from '@shared/types/event-form';

export const serializeCreateFestivalFormData = (v: EventFormSubmitValues): FormData | null => {
  if (!v.mainImageFile) {
    return null;
  }

  const schedulesPayload = v.schedules.map(({ date, time }) => ({
    festivalDate: date,
    festivalTime: time,
  }));
  const stagesPayload = v.stages.map(({ title, location }) => ({
    title,
    location,
  }));

  return toFormData({
    title: v.title,
    location: v.location,
    mainImage: v.mainImageFile,
    schedules: JSON.stringify(schedulesPayload),
    stages: JSON.stringify(stagesPayload),
    activeCategoryIds: JSON.stringify(v.activeCategoryIds),
  });
};

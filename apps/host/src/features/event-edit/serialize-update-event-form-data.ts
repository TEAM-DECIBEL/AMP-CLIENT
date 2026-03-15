import type { EventFormSubmitValues } from '@entities/event/event-form';

import { toFormData } from '@shared/libs/to-form-data';

export const serializeUpdateFestivalFormData = (
  v: EventFormSubmitValues,
): FormData => {
  const schedulesPayload = v.schedules.map(({ id, date, time }) => ({
    ...(typeof id === 'number' ? { id } : {}),
    festivalDate: date,
    festivalTime: time,
  }));

  const stagesPayload = v.stages.map(({ id, title, location }) => ({
    ...(typeof id === 'number' ? { id } : {}),
    title,
    ...(location ? { location } : {}),
  }));

  return toFormData({
    title: v.title,
    location: v.location,
    ...(v.mainImageFile ? { mainImage: v.mainImageFile } : {}),
    schedules: JSON.stringify(schedulesPayload),
    stages: JSON.stringify(stagesPayload),
    activeCategoryIds: JSON.stringify(v.activeCategoryIds),
  });
};

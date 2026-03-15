import { EventFormInitialValues } from '@entities/event/event-form';
import type { FestivalDetail } from '@entities/event-edit/types/event-edit';

export const toEventEditInitialValues = (
  data: FestivalDetail,
): EventFormInitialValues => {
  return {
    imageUrl: data.mainImageUrl,
    eventTitle: data.title,
    eventLocation: data.location,
    activeCategoryIds: data.activeCategoryIds,
    schedules: data.schedules.map((schedule) => ({
      id: schedule.id,
      date: schedule.festivalDate,
      time: schedule.festivalTime.slice(0, 5),
    })),
    stages: data.stages.map((stage) => ({
      id: stage.id,
      title: stage.title,
      location: stage.location,
    })),
  };
};

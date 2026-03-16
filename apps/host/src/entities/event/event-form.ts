import type { ItemId } from '@shared/types/item-id';

export interface EventScheduleValue {
  id?: ItemId;
  date: string;
  time: string;
}

export interface EventStageValue {
  id?: ItemId;
  title: string;
  location?: string;
}

export interface EventFormSubmitValues {
  title: string;
  location: string;
  schedules: EventScheduleValue[];
  stages: EventStageValue[];
  activeCategoryIds: number[];
  mainImageFile: File | null;
}

export interface EventFormInitialValues {
  imageUrl: string;
  eventTitle: string;
  eventLocation: string;
  activeCategoryIds: number[];
  schedules: EventScheduleValue[];
  stages: EventStageValue[];
}

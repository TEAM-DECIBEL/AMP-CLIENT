type ItemId = string | number;

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

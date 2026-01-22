export interface EventScheduleValue {
  id: string;
  date: string;
  time: string;
}

export interface EventStageValue {
  id: string;
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

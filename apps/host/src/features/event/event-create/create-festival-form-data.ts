import { toFormData } from '@shared/libs/to-form-data';

export const createFestivalFormData = (args: {
  title: string;
  location: string;
  mainImage: File;
  schedules: Array<{ date: string; time: string }>;
  stages: Array<{ title: string; location?: string }>;
  activeCategoryIds: number[];
}) => {
  const schedulesForServer = args.schedules.map(({ date, time }) => ({
    festivalDate: date,
    festivalTime: time,
  }));

  return toFormData({
    title: args.title,
    location: args.location,
    mainImage: args.mainImage,
    schedules: JSON.stringify(schedulesForServer),
    stages: JSON.stringify(args.stages),
    activeCategoryIds: JSON.stringify(args.activeCategoryIds),
  });
};

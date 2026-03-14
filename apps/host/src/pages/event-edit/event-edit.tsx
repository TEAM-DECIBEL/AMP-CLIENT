import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router';

import EventForm from '@widgets/event-form/event-form';

import { EVENT_EDIT_QUERY_OPTIONS } from '@features/event-edit/apis/query';
import { serializeUpdateFestivalFormData } from '@features/event-edit/serialize-update-event-form-data';
import { useFestivalUpdateMutation } from '@features/event-edit/use-event-edit';

import { ROUTE_PATH } from '@shared/constants/path';
import { EventFormInitialValues } from '@shared/types/event-form';

const EventEditPage = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const festivalId = Number(eventId);

  const { data, isLoading } = useQuery(
    EVENT_EDIT_QUERY_OPTIONS.DETAIL(
      Number.isFinite(festivalId) ? festivalId : null,
    ),
  );

  const updateMutation = useFestivalUpdateMutation(festivalId);

  if (isLoading) {
    return null;
  }

  if (!data) {
    return null;
  }

  const initialValues: EventFormInitialValues = {
    imageUrl: data.mainImageUrl,
    eventTitle: data.title,
    eventLocation: data.location,
    activeCategoryIds: data.activeCategoryIds,
    schedules: data.schedules.map((schedule) => ({
      id: schedule.id,
      date: schedule.festivalDate,
      time: schedule.festivalTime,
    })),
    stages: data.stages.map((stage) => ({
      id: stage.id,
      title: stage.title,
      location: stage.location,
    })),
  };

  return (
    <EventForm
      submitText='수정 완료'
      submitDisabled={updateMutation.isPending}
      initialValues={initialValues}
      onSubmit={(values) => {
        if (updateMutation.isPending) {
          return;
        }

        const formData = serializeUpdateFestivalFormData(values);

        updateMutation.mutate(formData, {
          onSuccess: () => {
            navigate(
              ROUTE_PATH.NOTICE_LIST.replace(':eventId', String(festivalId)),
            );
          },
        });
      }}
    />
  );
};

export default EventEditPage;

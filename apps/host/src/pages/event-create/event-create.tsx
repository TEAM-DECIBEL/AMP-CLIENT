import { useNavigate } from 'react-router';

import EventForm from '@widgets/event-form/event-form';

import { serializeCreateEventFormData } from '@features/event-create/serialize-create-event-form-data';
import { useEventCreateMutation } from '@features/event-create/use-event-create';

import { ROUTE_PATH } from '@shared/constants/path';

const EventCreatePage = () => {
  const navigate = useNavigate();

  const toNoticeList = (eventId: string | number) =>
    ROUTE_PATH.NOTICE_LIST.replace(':eventId', String(eventId));

  const createMutation = useEventCreateMutation();

  return (
    <EventForm
      submitText='완료'
      submitDisabled={createMutation.isPending}
      onSubmit={(values) => {
        if (createMutation.isPending) {
          return;
        }
        const formData = serializeCreateEventFormData(values);
        if (!formData) {
          return;
        }
        createMutation.mutate(formData, {
          onSuccess: (data) => {
            navigate(toNoticeList(data.festivalId));
          },
        });
      }}
    />
  );
};

export default EventCreatePage;

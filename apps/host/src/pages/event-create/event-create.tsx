import { useNavigate } from 'react-router';

import EventForm from '@widgets/event-form/event-form';

import { serializeCreateEventFormData } from '@features/event-create/serialize-create-event-form-data';
import { useEventCreateMutation } from '@features/event-create/use-event-create';

import { NAV_PATH } from '@shared/constants/path';

const EventCreatePage = () => {
  const navigate = useNavigate();

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
            navigate(NAV_PATH.noticeList(data.festivalId));
          },
        });
      }}
    />
  );
};

export default EventCreatePage;

import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import EventForm from '@widgets/event-form/event-form';

import { serializeCreateFestivalFormData } from '@features/event/event-create/serialize-event-form';

import { postCreateFestival } from '@shared/apis/event-create/post-create-festival';
import { ROUTE_PATH } from '@shared/constants/path';

const EventCreatePage = () => {
  const navigate = useNavigate();

  const toNoticeList = (eventId: string | number) =>
    ROUTE_PATH.NOTICE_LIST.replace(':eventId', String(eventId));

  const createMutation = useMutation({
    mutationFn: postCreateFestival,
    onSuccess: (data) => {
      const eventId = data.festivalId;
      navigate(toNoticeList(eventId));
    },
  });

  return (
    <EventForm
      submitText='완료'
      submitDisabled={createMutation.isPending}
      onSubmit={(values) => {
        const formData = serializeCreateFestivalFormData(values);
        if (!formData) {
          return;
        }

        createMutation.mutate(formData);
      }}
    />
  );
};

export default EventCreatePage;

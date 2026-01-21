import { useMutation } from '@tanstack/react-query';

import EventForm from '@widgets/event-form/event-form';

import { serializeCreateFestivalFormData } from '@features/event/event-create/serialize-event-form';

import { postCreateFestival } from '@shared/apis/event-create/post-create-festival';

const EventCreatePage = () => {
  const createMutation = useMutation({
    mutationFn: postCreateFestival,
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

        createMutation.mutate(formData, {
          onSuccess: (data) => {
            console.log('created festivalId:', data.festivalId);
          },
          onError: (err) => {
            console.error(err);
            alert('공연 등록에 실패했어요.');
          },
        });
      }}
    />
  );
};

export default EventCreatePage;

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
            // TODO: 성공 후 페이지 이동 추가
          },
          onError: (err) => {
            console.error(err);
            alert('공연 등록에 실패했어요.');
            // TODO: 에러 UI
          },
        });
      }}
    />
  );
};

export default EventCreatePage;

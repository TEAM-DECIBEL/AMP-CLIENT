import { useQuery } from '@tanstack/react-query';
import { overlay } from 'overlay-kit';
import { useNavigate, useParams } from 'react-router';

import { Modal, RectButton } from '@amp/ads-ui';
import { Loading } from '@amp/compositions';

import EventForm from '@widgets/event-form/event-form';

import { serializeUpdateFestivalFormData } from '@features/event-edit/serialize-update-event-form-data';
import { toEventEditInitialValues } from '@features/event-edit/to-event-edit-initial-values';
import { useFestivalUpdateMutation } from '@features/event-edit/use-event-edit';

import type { EventFormSubmitValues } from '@entities/event/event-form';
import { EVENT_EDIT_QUERY_OPTIONS } from '@entities/event-edit/model/query-options';

import { NAV_PATH } from '@shared/constants/path';

interface ConfirmModalProps {
  title: string;
  description?: string;
  onConfirm: () => void;
}

interface EventEditPageContentProps {
  festivalId: number;
}

const areSameCategoryIds = (prev: number[], next: number[]) => {
  if (prev.length !== next.length) {
    return false;
  }

  const sortedPrev = [...prev].sort((a, b) => a - b);
  const sortedNext = [...next].sort((a, b) => a - b);

  return sortedPrev.every((id, index) => id === sortedNext[index]);
};

const EventEditPageContent = ({ festivalId }: EventEditPageContentProps) => {
  const updateMutation = useFestivalUpdateMutation(festivalId);

  const { data, isLoading } = useQuery(
    EVENT_EDIT_QUERY_OPTIONS.DETAIL(festivalId),
  );

  const navigate = useNavigate();

  if (!Number.isFinite(festivalId)) {
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  const initialValues = toEventEditInitialValues(data);

  const submitEdit = (values: EventFormSubmitValues) => {
    const formData = serializeUpdateFestivalFormData(values);

    updateMutation.mutate(formData, {
      onSuccess: () => {
        navigate(NAV_PATH.noticeList(festivalId));
      },
    });
  };

  const openConfirmModal = ({
    title,
    description,
    onConfirm,
  }: ConfirmModalProps) => {
    overlay.open(({ isOpen, close, unmount }) => (
      <Modal
        open={isOpen}
        onClose={() => {
          close();
          unmount();
        }}
      >
        <Modal.Panel>
          <Modal.Content>
            <Modal.Title>{title}</Modal.Title>
            {description ? (
              <Modal.Description>{description}</Modal.Description>
            ) : null}
          </Modal.Content>

          <Modal.Actions>
            <RectButton
              variant='secondary'
              onClick={() => {
                close();
                unmount();
              }}
            >
              취소
            </RectButton>

            <RectButton
              variant='primary'
              disabled={updateMutation.isPending}
              onClick={() => {
                onConfirm();
                close();
                unmount();
              }}
            >
              확인
            </RectButton>
          </Modal.Actions>
        </Modal.Panel>
      </Modal>
    ));
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

        const isCategoryChanged = !areSameCategoryIds(
          initialValues.activeCategoryIds,
          values.activeCategoryIds,
        );

        openConfirmModal({
          title: isCategoryChanged
            ? '공연 카테고리를 수정하시겠어요?'
            : '공연을 수정하시겠어요?',
          description: isCategoryChanged
            ? '카테고리를 수정하면\n해당 카테고리로 작성된 공지가 삭제돼요.'
            : undefined,
          onConfirm: () => submitEdit(values),
        });
      }}
    />
  );
};

const EventEditPage = () => {
  const { eventId } = useParams();
  const festivalId = Number(eventId);

  if (!Number.isFinite(festivalId)) {
    return null;
  }

  return <EventEditPageContent festivalId={festivalId} />;
};

export default EventEditPage;

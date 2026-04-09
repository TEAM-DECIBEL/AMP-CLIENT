import { useQuery } from '@tanstack/react-query';
import { overlay } from 'overlay-kit';
import { useNavigate, useParams } from 'react-router';

import { Modal, RectButton, toast } from '@amp/ads-ui';
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
  values: EventFormSubmitValues;
}

interface EventEditPageContentProps {
  festivalId: number;
}

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

  const handleConfirmEdit = (
    values: EventFormSubmitValues,
    closeModal: () => void,
  ) => {
    const formData = serializeUpdateFestivalFormData(values);

    updateMutation.mutate(formData, {
      onSuccess: () => {
        closeModal();
        navigate(NAV_PATH.noticeList(festivalId));
      },
      onError: () => {
        toast.show('공연 수정에 실패했어요. 잠시 후 다시 시도해 주세요.');
      },
    });
  };
  const initialValues = toEventEditInitialValues(data);

  const openConfirmModal = ({
    title,
    description,
    values,
  }: ConfirmModalProps) => {
    overlay.open(({ isOpen, close, unmount }) => (
      <Modal
        open={isOpen}
        onClose={() => {
          if (updateMutation.isPending) {
            return;
          }

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
              disabled={updateMutation.isPending}
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
                handleConfirmEdit(values, () => {
                  close();
                  unmount();
                });
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

        const hasDeletedCategory = initialValues.activeCategoryIds.some(
          (id) => !values.activeCategoryIds.includes(id),
        );

        openConfirmModal({
          title: hasDeletedCategory
            ? '공지 카테고리를 수정하시겠어요?'
            : '수정하시겠어요?',
          description: hasDeletedCategory
            ? '카테고리를 수정하면\n해당 카테고리로 작성된 공지가 삭제돼요.'
            : undefined,
          values,
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

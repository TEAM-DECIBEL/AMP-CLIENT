import type { ReactNode } from 'react';

import { NoticeIcon } from '../../../icons';
import CtaButton from '../../button/cta-button/cta-button';
import BottomSheet from '../bottom-sheet';

import * as styles from './status-sheet.css';

export type StatusSheetValue = '여유' | '보통' | '혼잡';
const STATUS_DESCRIPTION = '현재 상황에 가장 가까운 상태를 선택해 주세요.';
const EMPTY_TITLE = '아직 현장 상황 입력 시간이 아니에요!';
const EMPTY_DESCRIPTION = '공연 시작 시간 8시간 전부터 입력이 가능해요.';

interface StatusSheetBaseProps {
  open: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

interface StatusSheetSelectableProps extends StatusSheetBaseProps {
  selectable: true;
  title: ReactNode;
  selected?: StatusSheetValue;
  onSelect: (value: StatusSheetValue) => void;
}

interface StatusSheetReadonlyProps extends StatusSheetBaseProps {
  selectable?: false;
}

type StatusSheetProps = StatusSheetSelectableProps | StatusSheetReadonlyProps;

const StatusSelectableContent = ({
  title,
}: {
  title: ReactNode;
}) => {
  return (
    <>
      <BottomSheet.Header>
        <BottomSheet.Title>{title} 현장 상황</BottomSheet.Title>
        <BottomSheet.Description>{STATUS_DESCRIPTION}</BottomSheet.Description>
      </BottomSheet.Header>
      <div className={styles.options}>
        {/* SelectButton 추가되면 수정 예정*/}
        {/* {[
          { value: '여유', preset: { kind: 'crowding', variant: 'relaxed' } },
          { value: '보통', preset: { kind: 'crowding', variant: 'normal' } },
          { value: '혼잡', preset: { kind: 'crowding', variant: 'crowded' } },
        ].map(({ value, preset }) => (
          <SelectButton
            key={value}
            preset={preset}
            imageUrl=''
            selected={selected === value}
            onChange={() => onSelect?.(value)}
          />
        ))} */}
      </div>
    </>
  );
};

const StatusEmptyContent = () => {
  return (
    <div className={styles.emptyWrap}>
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>
          <NoticeIcon width='4.8rem' height='4.8rem' />
        </div>
        <h3 className={styles.emptyTitle}>{EMPTY_TITLE}</h3>
        <p className={styles.emptyDescription}>{EMPTY_DESCRIPTION}</p>
      </div>
    </div>
  );
};

const StatusSheet = (props: StatusSheetProps) => {
  const { open, onClose, onConfirm } = props;
  const handleConfirm = () => {
    if (props.selectable === true && !props.selected) {
      return;
    }
    onConfirm?.();
    onClose?.();
  };

  return (
    <BottomSheet open={open} onClose={onClose}>
      <BottomSheet.Panel>
        <BottomSheet.Handle />
        {props.selectable === true ? (
          <StatusSelectableContent title={props.title} />
        ) : (
          <StatusEmptyContent />
        )}
        <div className={styles.actions}>
          <CtaButton type='gray' onClick={handleConfirm}>
            확인
          </CtaButton>
        </div>
      </BottomSheet.Panel>
    </BottomSheet>
  );
};

export default StatusSheet;

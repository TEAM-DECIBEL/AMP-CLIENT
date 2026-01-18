import type { ReactNode } from 'react';

import { NoticeIcon } from '../../../icons';
import CtaButton from '../../button/cta-button/cta-button';
import BottomSheet from '../bottom-sheet';
import {
  EMPTY_DESCRIPTION,
  EMPTY_TITLE,
  STATUS_DESCRIPTION,
  type StatusSheetValue,
} from './status-sheet.constants';

import * as styles from './status-sheet.css';

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

const StatusSelectableContent = ({ title }: { title: ReactNode }) => {
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
        <NoticeIcon
          className={styles.emptyIcon}
          width='4.8rem'
          height='4.8rem'
        />
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
          <CtaButton type='common' color='gray' onClick={handleConfirm}>
            확인
          </CtaButton>
        </div>
      </BottomSheet.Panel>
    </BottomSheet>
  );
};

export default StatusSheet;

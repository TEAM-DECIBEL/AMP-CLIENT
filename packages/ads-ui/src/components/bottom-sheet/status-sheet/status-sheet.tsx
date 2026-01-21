import { useState } from 'react';
import type { ReactNode } from 'react';

import { NoticeIcon } from '../../../icons';
import CrowdLevelButton from '../../button/crowd-level-button/crowd-level-button';
import CtaButton from '../../button/cta-button/cta-button';
import BottomSheet from '../bottom-sheet';
import {
  CROWD_OPTIONS,
  EMPTY_DESCRIPTION,
  EMPTY_TITLE,
  STATUS_DESCRIPTION,
  type StatusSheetValue,
} from './status-sheet.constants';

import * as styles from './status-sheet.css';

interface StatusSheetBaseProps {
  open: boolean;
  onClose: () => void;
}

interface StatusSheetSelectableProps extends StatusSheetBaseProps {
  selectable: true;
  title: ReactNode;
  selected?: StatusSheetValue;
  onConfirm: (value: StatusSheetValue) => void;
}

interface StatusSheetReadonlyProps extends StatusSheetBaseProps {
  selectable?: false;
}

type StatusSheetProps = StatusSheetSelectableProps | StatusSheetReadonlyProps;

interface StatusSelectableContentProps {
  title: ReactNode;
  selected?: StatusSheetValue;
  onSelect: (value: StatusSheetValue) => void;
}

const StatusSelectableContent = ({
  title,
  selected,
  onSelect,
}: StatusSelectableContentProps) => {
  return (
    <>
      <BottomSheet.Header>
        <BottomSheet.Title>{title} 현장 상황</BottomSheet.Title>
        <BottomSheet.Description>{STATUS_DESCRIPTION}</BottomSheet.Description>
      </BottomSheet.Header>

      <div className={styles.options}>
        {CROWD_OPTIONS.map(({ value, variant, imageUrl }) => (
          <CrowdLevelButton
            key={value}
            variant={variant}
            imageUrl={imageUrl}
            selected={selected === value}
            onChange={() => onSelect(value)}
          />
        ))}
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
  const { open, onClose } = props;

  const [draft, setDraft] = useState<StatusSheetValue>();

  const handleCloseSheet = () => {
    setDraft(undefined);
    onClose();
  };

  const handleConfirmSheet = () => {
    if (props.selectable !== true) {
      onClose();
      return;
    }

    if (!draft) {
      return;
    }

    props.onConfirm(draft);
    handleCloseSheet();
  };

  const isConfirmDisabled = props.selectable === true ? !draft : false;

  return (
    <BottomSheet open={open} onClose={handleCloseSheet}>
      <BottomSheet.Panel>
        <BottomSheet.Handle />

        {props.selectable === true ? (
          <StatusSelectableContent
            title={props.title}
            selected={draft}
            onSelect={setDraft}
          />
        ) : (
          <StatusEmptyContent />
        )}

        <div className={styles.actions}>
          <CtaButton
            type='common'
            color='gray'
            onClick={handleConfirmSheet}
            disabled={isConfirmDisabled}
          >
            확인
          </CtaButton>
        </div>
      </BottomSheet.Panel>
    </BottomSheet>
  );
};

export default StatusSheet;

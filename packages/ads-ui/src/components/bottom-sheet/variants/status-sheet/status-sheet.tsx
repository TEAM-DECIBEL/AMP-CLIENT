import type { ReactNode } from 'react';

import BottomSheet from '../../bottom-sheet';

import * as styles from './status-sheet.css';

interface StatusSheetProps {
  open: boolean;
  onClose?: () => void;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
  actions: ReactNode;
  empty?: ReactNode;
}

const StatusSheet = ({
  open,
  onClose,
  title,
  description,
  children,
  actions,
  empty,
}: StatusSheetProps) => {
  return (
    <BottomSheet open={open} onClose={onClose}>
      <BottomSheet.Panel>
        <BottomSheet.Handle />
        {empty ? (
          <div className={styles.emptyWrap}>{empty}</div>
        ) : (
          <>
            <BottomSheet.Header>
              <BottomSheet.Title>{title}</BottomSheet.Title>
              <BottomSheet.Description>{description}</BottomSheet.Description>
            </BottomSheet.Header>
            <div className={styles.options}>{children}</div>
          </>
        )}
        <div className={styles.actions}>{actions}</div>
      </BottomSheet.Panel>
    </BottomSheet>
  );
};

interface StatusOptionProps {
  label: ReactNode;
  media?: ReactNode;
  onClick?: () => void;
  selected?: boolean;
}

const StatusOption = ({
  label,
  media,
  onClick,
  selected = false,
}: StatusOptionProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={styles.option}
      data-selected={selected ? 'true' : 'false'}
    >
      <div className={styles.optionMedia}>
        {media}
        {/* <img src={src} alt='' className={styles.optionImage} /> */}
      </div>
      <span>{label}</span>
    </button>
  );
};

interface StatusEmptyProps {
  icon: ReactNode;
  title: ReactNode;
  description: ReactNode;
}

const StatusEmpty = ({ icon, title, description }: StatusEmptyProps) => {
  return (
    <div className={styles.empty}>
      <div className={styles.emptyIcon}>{icon}</div>
      <h3 className={styles.emptyTitle}>{title}</h3>
      <p className={styles.emptyDescription}>{description}</p>
    </div>
  );
};

const StatusSheetCompound = Object.assign(StatusSheet, {
  Option: StatusOption,
  Empty: StatusEmpty,
});

export default StatusSheetCompound;

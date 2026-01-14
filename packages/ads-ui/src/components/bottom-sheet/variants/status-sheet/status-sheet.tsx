import type { ReactNode } from 'react';

import { NoticeIcon } from '../../../../icons';
import CtaButton from '../../../button/cta-button/cta-button';
import BottomSheet from '../../bottom-sheet';

import * as styles from './status-sheet.css';

export type StatusSheetValue = '여유' | '보통' | '혼잡';

interface StatusSheetProps {
  open: boolean;
  onClose?: () => void;
  title: ReactNode;
  selectable: boolean;
  selected?: StatusSheetValue;
  onSelect?: (value: StatusSheetValue) => void;
  onConfirm?: () => void;
}

const StatusSheet = ({
  open,
  onClose,
  title,
  selectable,
  selected,
  onSelect,
  onConfirm,
}: StatusSheetProps) => {
  const handleConfirm = () => {
    if (selectable && !selected) {
      return;
    }
    onConfirm?.();
    onClose?.();
  };

  return (
    <BottomSheet open={open} onClose={onClose}>
      <BottomSheet.Panel>
        <BottomSheet.Handle />
        {selectable ? (
          <>
            <BottomSheet.Header>
              <BottomSheet.Title>{title} 현장 상황</BottomSheet.Title>
              <BottomSheet.Description>
                현재 상황에 가장 가까운 상태를 선택해 주세요.
              </BottomSheet.Description>
            </BottomSheet.Header>
            <div className={styles.options}>
              {(['여유', '보통', '혼잡'] as const).map((label) => (
                <button
                  key={label}
                  type='button'
                  onClick={() => onSelect?.(label)}
                  className={styles.option}
                  data-selected={selected === label ? 'true' : 'false'}
                >
                  <div className={styles.optionMedia}>
                    {/* <img src={src} alt='' className={styles.optionImage} /> */}
                  </div>
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className={styles.emptyWrap}>
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>
                <NoticeIcon width='4.8rem' height='4.8rem' />
              </div>
              <h3 className={styles.emptyTitle}>
                아직 현장 상황 입력 시간이 아니에요!
              </h3>
              <p className={styles.emptyDescription}>
                공연 시작 시간 8시간 전부터 입력이 가능해요.
              </p>
            </div>
          </div>
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

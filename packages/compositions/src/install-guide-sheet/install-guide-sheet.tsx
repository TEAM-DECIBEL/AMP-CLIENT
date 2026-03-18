import { BottomSheet, CtaButton } from '@amp/ads-ui';

import { IMAGES } from '../assets/index';

import * as styles from './install-guide-sheet.css';

interface InstallGuideSheetProps {
  open: boolean;
  onClose: () => void;
  onOpenApp: () => void;
  onBrowseToday: () => void;
  description: string;
}

const InstallGuideSheet = ({
  open,
  onClose,
  onOpenApp,
  onBrowseToday,
  description,
}: InstallGuideSheetProps) => {
  return (
    <BottomSheet open={open} onClose={onClose}>
      <BottomSheet.Panel>
        <BottomSheet.Handle />
        <BottomSheet.Content>
          <div className={styles.contentContainer}>
            <img
              src={IMAGES.LOGO}
              alt=''
              aria-hidden='true'
              className={styles.icon}
            />
            <p className={styles.title}>
              홈 화면에 AMP 앱을 추가하고
              <br />
              {description}
            </p>
          </div>
        </BottomSheet.Content>

        <BottomSheet.Actions>
          <div className={styles.buttonContainer}>
            <CtaButton type='common' color='gray' onClick={onOpenApp}>
              설치 없이 앱으로 열기
            </CtaButton>

            <button
              type='button'
              className={styles.button}
              onClick={onBrowseToday}
            >
              오늘은 둘러볼게요
            </button>
          </div>
        </BottomSheet.Actions>
      </BottomSheet.Panel>
    </BottomSheet>
  );
};

export default InstallGuideSheet;

import { IMAGES } from '../../../assets';

export type StatusSheetValue = 'SMOOTH' | 'NORMAL' | 'CROWDED' | 'NONE';

export const STATUS_DESCRIPTION =
  '현재 상황에 가장 가까운 상태를 선택해 주세요.';
export const EMPTY_TITLE = '아직 현장 상황 입력 시간이 아니에요!';
export const EMPTY_DESCRIPTION = '공연 시작 시간 8시간 전부터 입력이 가능해요.';

export const CROWD_OPTIONS: {
  variant: 'smooth' | 'normal' | 'crowded' | 'none';

  value: StatusSheetValue;
  imageUrl: string;
}[] = [
  {
    variant: 'smooth',
    value: 'SMOOTH',
    imageUrl: IMAGES.SMOOTH_BUTTON,
  },
  {
    variant: 'normal',
    value: 'NORMAL',
    imageUrl: IMAGES.NORMAL_BUTTON,
  },
  {
    variant: 'crowded',
    value: 'CROWDED',

    imageUrl: IMAGES.CROWDED_BUTTON,
  },
];

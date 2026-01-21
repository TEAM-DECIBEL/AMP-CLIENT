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
    imageUrl:
      'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Relieved%20Face.png',
  },
  {
    variant: 'normal',
    value: 'NORMAL',
    imageUrl:
      'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Neutral%20Face.png',
  },
  {
    variant: 'crowded',
    value: 'CROWDED',
    imageUrl:
      'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Confounded%20Face.png',
  },
  {
    variant: 'none',
    value: 'NONE',
    imageUrl:
      'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Confounded%20Face.png',
  },
];

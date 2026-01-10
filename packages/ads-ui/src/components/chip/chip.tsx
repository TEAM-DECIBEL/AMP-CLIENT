interface ChipBaseProps {
  children: React.ReactNode;
  className?: string;
}

interface ChipStatusProps extends ChipBaseProps {
  variant: 'chip_status';
  status: 'current' | 'upcoming' | 'dday';
}

interface ChipDayProps extends ChipBaseProps {
  variant: 'chip_day';
  status: 'color' | 'gray';
}

interface ChipMyPageProps extends ChipBaseProps {
  variant: 'chip_mypage';
  status?: never;
  children: '주최' | '관객';
}

type ChipProps = ChipStatusProps | ChipDayProps | ChipMyPageProps;

const Chip = (props: ChipProps) => {};

export default Chip;

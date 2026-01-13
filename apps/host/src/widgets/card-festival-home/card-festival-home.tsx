import { ReactNode } from 'react';
import { MoreIcon } from 'node_modules/@amp/ads-ui/src/icons';

import { Chip } from '@amp/ads-ui';
import { CardFestival } from '@amp/ads-ui'; // 위에서 만든 컴포넌트

const HOME_CHIP_MAP: Record<string, ReactNode> = {
  dday: (
    <Chip variant='status' status='dday'>
      D-day
    </Chip>
  ),
  upcoming: (
    <Chip variant='status' status='current'>
      진행 예정
    </Chip>
  ),
  ongoing: (
    <Chip variant='status' status='current'>
      진행 중
    </Chip>
  ),
};

interface CardFestivalHomeProps {
  mainImageUrl: string;
  title: string;
  startDate: string;
  endDate: string;
  isDday: boolean;
  status: 'upcoming' | 'ongoing';
}

const CardFestivalHome = ({
  isDday,
  status,
  ...props
}: CardFestivalHomeProps) => {
  return (
    <CardFestival
      {...props}
      chipMap={HOME_CHIP_MAP}
      activeKeys={[isDday && 'dday', status]}
      iconSlot={<MoreIcon />}
    />
  );
};

export default CardFestivalHome;

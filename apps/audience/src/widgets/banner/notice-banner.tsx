import { ReactNode } from 'react';

interface NoticeBanenrProps {
  mainImageUrl: string;
  chip: ReactNode;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
}

const NoticeBanner = ({
  chip,
  title,
  location,
  startDate,
  endDate,
}: NoticeBanenrProps) => {
  return (
    <section>
      <div></div>
      <div></div>
    </section>
  );
};

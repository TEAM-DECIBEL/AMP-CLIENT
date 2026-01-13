import { ReactNode } from 'react';

import * as styles from './card-festival.css';

const Image = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className={styles.image} />
);

const Text = ({
  title,
  startDate,
  endDate,
}: {
  title: string;
  startDate: string;
  endDate: string;
}) => (
  <div>
    <p className={styles.title}>{title}</p>
    <p className={styles.duration}>
      {startDate} - {endDate}
    </p>
  </div>
);

const Chip = ({ children }: { children: ReactNode }) => (
  <div className={styles.chip}>{children}</div>
);

const Button = ({ children }: { children: ReactNode }) => (
  <div className={styles.buttonSlot}>{children}</div>
);

const Icon = ({ children }: { children: ReactNode }) => (
  <div className={styles.iconSlot}>{children}</div>
);

const Root = ({ children }: { children: ReactNode }) => (
  <article className={styles.card}>{children}</article>
);

const ContentContainer = ({ children }: { children: ReactNode }) => (
  <div className={styles.contentContainer}>{children}</div>
);

export const CardFestival = Object.assign(Root, {
  Image,
  Text,
  Chip,
  Button,
  Icon,
  ContentContainer,
});

export default CardFestival;

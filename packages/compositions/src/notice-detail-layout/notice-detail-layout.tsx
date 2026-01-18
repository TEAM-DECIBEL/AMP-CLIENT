import { ReactNode } from 'react';

import ButtonGradientSection from '../button-gradient-section/button-gradient-section';

import * as styles from './notice-detail-layout.css';

interface NoticeData {
  imageUrl: string;
  title: string;
  category: string;
  createdAt: string;
  content: string;
}

interface LayoutProps {
  children: ReactNode;
}

interface ContentProps {
  data: NoticeData;
}

interface ActionsProps {
  children: ReactNode;
}

const NoticeDetailLayoutRoot = ({ children }: LayoutProps) => {
  return <main className={styles.container}>{children}</main>;
};

const Content = ({ data }: ContentProps) => {
  return (
    <div className={styles.noticeDetail}>
      <img src={data.imageUrl} alt={data.title} className={styles.img} />
      <header className={styles.header}>
        <p className={styles.category}>
          주최 공지 {'>'} {data.category}
        </p>
        <p className={styles.date}>{data.createdAt}</p>
      </header>
      <div className={styles.contents}>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

const Actions = ({ children }: ActionsProps) => {
  return (
    <ButtonGradientSection className={styles.button}>
      {children}
    </ButtonGradientSection>
  );
};

const NoticeDetailLayout = Object.assign(NoticeDetailLayoutRoot, {
  Content,
  Actions,
});

export default NoticeDetailLayout;

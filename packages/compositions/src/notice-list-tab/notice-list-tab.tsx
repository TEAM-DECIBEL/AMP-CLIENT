import { Tabs } from '@amp/ads-ui';

export const NOTICE_TAB = {
  NOTICE: 'notice',
  STATUS: 'status',
} as const;

type NoticeTab = (typeof NOTICE_TAB)[keyof typeof NOTICE_TAB];

const isNoticeTab = (value: string): value is NoticeTab => {
  return value === NOTICE_TAB.NOTICE || value === NOTICE_TAB.STATUS;
};

interface NoticeTabContentProps {
  onChange: (tab: NoticeTab) => void;
}

const NoticeTabContent = ({ onChange }: NoticeTabContentProps) => {
  return (
    <Tabs
      defaultValue='notice'
      variant='notice'
      onValueChange={(value) => {
        if (isNoticeTab(value)) {
          onChange(value);
        }
      }}
    >
      <Tabs.List>
        <Tabs.Trigger value='notice'>주최 공지</Tabs.Trigger>
        <Tabs.Trigger value='status'>현장 상황</Tabs.Trigger>
      </Tabs.List>
    </Tabs>
  );
};

export default NoticeTabContent;

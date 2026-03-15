import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { Loading } from '@amp/compositions';

import { NOTICES_QUERY_OPTIONS } from '@features/notice-list/apis/query';

import { NOTICE_QUERY_OPTIONS } from '@entities/notice/model/query-options';

import NoticeForm from './notice-form';

const NoticeCreatePage = () => {
  const { eventId, noticeId } = useParams();

  const festivalId =
    eventId && !Number.isNaN(Number(eventId)) ? Number(eventId) : null;
  const noticeIdValue =
    noticeId && !Number.isNaN(Number(noticeId)) ? Number(noticeId) : null;

  const { data: noticeDetail, isPending: isDetailPending } = useQuery({
    ...NOTICE_QUERY_OPTIONS.DETAIL(noticeIdValue),
    enabled: noticeIdValue !== null,
  });

  const { data: noticeFestival, isPending: isFestivalPending } = useQuery({
    ...NOTICES_QUERY_OPTIONS.BANNER(festivalId ?? 0),
    enabled: festivalId !== null,
  });

  const { data: noticeListData, isPending: isListPending } = useQuery({
    ...NOTICES_QUERY_OPTIONS.LIST(festivalId ?? 0, { page: 0, size: 20 }),
    enabled: festivalId !== null,
  });

  const pinnedCount =
    noticeListData?.announcements.filter((n) => n.isPinned).length ?? 0;
  const activeCategories = noticeFestival?.activeCategories ?? [];

  if (festivalId === null) {
    return null;
  }

  const isLoading =
    (noticeIdValue !== null && isDetailPending) ||
    isFestivalPending ||
    isListPending;
  if (isLoading) {
    return <Loading />;
  }

  const formKey = noticeIdValue ? `edit-${noticeIdValue}` : 'create';

  return (
    <NoticeForm
      key={formKey}
      festivalId={festivalId}
      noticeDetail={noticeDetail}
      activeCategories={activeCategories}
      pinnedCount={pinnedCount}
    />
  );
};

export default NoticeCreatePage;

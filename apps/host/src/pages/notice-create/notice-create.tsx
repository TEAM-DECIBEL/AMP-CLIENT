import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { Loading } from '@amp/compositions';

import { NOTICES_QUERY_OPTIONS } from '@features/notice-list/apis/query';

import { NOTICE_QUERY_OPTIONS } from '@entities/notice/model/query-options';

import NoticeForm from './notice-form';

const NoticeCreatePage = () => {
  const { eventId, noticeId } = useParams();

  const festivalId = Number(eventId);
  const noticeIdValue = Number(noticeId);

  const { data: noticeDetail, isPending: isDetailPending } = useQuery({
    ...NOTICE_QUERY_OPTIONS.DETAIL(noticeIdValue),
    enabled: !Number.isNaN(noticeIdValue),
  });

  const { data: noticeFestival, isPending: isFestivalPending } = useQuery({
    ...NOTICES_QUERY_OPTIONS.BANNER(festivalId),
    enabled: !Number.isNaN(festivalId),
  });

  const { data: noticeListData, isPending: isListPending } = useQuery({
    ...NOTICES_QUERY_OPTIONS.LIST(festivalId, { page: 0, size: 20 }),
    enabled: !Number.isNaN(festivalId),
  });

  const pinnedCount =
    noticeListData?.announcements.filter((n) => n.isPinned).length ?? 0;
  const activeCategories = noticeFestival?.activeCategories ?? [];

  if (Number.isNaN(festivalId)) {
    return null;
  }

  const isLoading =
    (!Number.isNaN(noticeIdValue) && isDetailPending) ||
    isFestivalPending ||
    isListPending;
  if (isLoading) {
    return <Loading />;
  }

  const formKey = Number.isNaN(noticeIdValue)
    ? 'create'
    : `edit-${noticeIdValue}`;

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

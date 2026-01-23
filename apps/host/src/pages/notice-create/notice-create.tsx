import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import {
  AddImageButton,
  CategoryButton,
  CheckButton,
  CtaButton,
  Textfield,
} from '@amp/ads-ui';
import { PinIcon } from '@amp/ads-ui/icons';

import { NOTICE_QUERY_OPTIONS } from '@features/notice/apis/query';
import { NOTICES_QUERY_OPTIONS } from '@features/notice-list/apis/query';

import { CATEGORIES } from '@shared/constants/category';
import { useNoticeForm } from '@shared/hooks/use-notice-form';
import type { NoticeDetail } from '@shared/types/notice';
import InputLayout from '@shared/ui/input/input-layout';
import Textarea from '@shared/ui/textarea/textarea';

import * as styles from './notice-create.css';

const NoticeCreatePage = () => {
  const { eventId, noticeId } = useParams();
  const parsedFestivalId = eventId ? Number(eventId) : NaN;
  const festivalId = Number.isNaN(parsedFestivalId) ? null : parsedFestivalId;

  const parsedNoticeId = noticeId ? Number(noticeId) : NaN;
  const noticeIdValue = Number.isNaN(parsedNoticeId) ? null : parsedNoticeId;

  const { data: noticeDetail } = useQuery({
    ...NOTICE_QUERY_OPTIONS.DETAIL(noticeIdValue ?? 0),
    enabled: noticeIdValue !== null,
  });

  const { data: noticeFestival } = useQuery({
    ...NOTICES_QUERY_OPTIONS.BANNER(festivalId ?? 0),
    enabled: festivalId !== null,
  });

  const { data: noticeListData, isPending: isNoticeListPending } = useQuery(
    NOTICES_QUERY_OPTIONS.LIST(festivalId ?? Number.NaN, {
      page: 0,
      size: 100,
    }),
  );

  const pinnedCount = useMemo(
    () =>
      noticeListData?.announcements.filter((notice) => notice.isPinned)
        .length ?? 0,
    [noticeListData],
  );

  const activeCategories = useMemo(() => {
    const res = noticeFestival as
      | {
          data?: {
            activeCategories?: Array<{
              categoryId: number;
              categoryName: string;
            }>;
          };
        }
      | {
          activeCategories?: Array<{
            categoryId: number;
            categoryName: string;
          }>;
        }
      | undefined;

    if (!res) {
      return [];
    }

    if ('data' in res) {
      return res.data?.activeCategories ?? [];
    }

    if ('activeCategories' in res) {
      return res.activeCategories ?? [];
    }

    return [];
  }, [noticeFestival]);

  const formKey = noticeDetail ? `edit-${noticeDetail.noticeId}` : 'create';

  return (
    <NoticeCreateForm
      key={formKey}
      festivalId={festivalId}
      noticeDetail={noticeDetail}
      activeCategories={activeCategories}
      pinnedCount={pinnedCount}
      pinnedCountReady={!isNoticeListPending}
    />
  );
};

interface NoticeCreateFormProps {
  festivalId: number | null;
  noticeDetail?: NoticeDetail;
  activeCategories: Array<{ categoryId: number; categoryName: string }>;
  pinnedCount: number;
  pinnedCountReady: boolean;
}

const NoticeCreateForm = ({
  festivalId,
  noticeDetail,
  activeCategories,
  pinnedCount,
  pinnedCountReady,
}: NoticeCreateFormProps) => {
  const { formState, handlers, isValid, isSubmitting } = useNoticeForm(
    festivalId,
    noticeDetail,
    noticeDetail?.noticeId ?? null,
    pinnedCount,
    pinnedCountReady,
  );

  const categories = useMemo(
    () =>
      activeCategories.length > 0
        ? activeCategories.map((c) => ({
            id: c.categoryId,
            label: c.categoryName,
          }))
        : CATEGORIES,
    [activeCategories],
  );

  const { isPinned, imageUrl, selectedCategoryId, title, content } = formState;
  const {
    handlePinToggle,
    handleImageChange,
    handleCategoryClick,
    handleTitleChange,
    handleContentChange,
    handleSubmit,
  } = handlers;

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>공연 공지</p>
          <p className={styles.description}>
            관객에게 전달할 공지 내용을 작성해주세요.
          </p>
        </div>

        <div className={styles.fixedBox}>
          <div className={styles.fixedText}>
            <PinIcon />
            <p>공지 상단 고정</p>
          </div>
          <CheckButton checked={isPinned} onChange={handlePinToggle} />
        </div>

        <InputLayout label='공지 이미지' isEssential={false}>
          <AddImageButton
            imageUrl={imageUrl}
            onFileChange={handleImageChange}
          />
        </InputLayout>

        <hr className={styles.divider} />

        <InputLayout label='카테고리' isEssential={true}>
          <div className={styles.chipContainer}>
            {categories.map((category) => (
              <CategoryButton
                key={category.id}
                variant='neutral'
                selected={selectedCategoryId === category.id}
                onChange={() => handleCategoryClick(category.id)}
              >
                {category.label}
              </CategoryButton>
            ))}
          </div>
        </InputLayout>

        <InputLayout id='notice-title' label='제목' isEssential={true}>
          <Textfield
            variant='default'
            id='notice-title'
            placeholder='공지 제목을 입력해주세요.'
            value={title}
            onChange={handleTitleChange}
          />
        </InputLayout>

        <InputLayout id='notice-description' label='내용' isEssential={true}>
          <Textarea
            id='notice-description'
            placeholder='공지 내용을 입력해주세요.'
            value={content}
            onChange={handleContentChange}
          />
        </InputLayout>

        <div className={styles.buttonContainer}>
          <CtaButton
            type='common'
            htmlType='submit'
            color='gray'
            disabled={!isValid || isSubmitting}
          >
            완료
          </CtaButton>
        </div>
      </form>
    </>
  );
};

export default NoticeCreatePage;

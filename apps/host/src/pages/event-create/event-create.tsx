import { useState } from 'react';

import { AddImageButton, CtaButton, Textfield } from '@amp/ads-ui';
import {
  CalendarIcon,
  FlagIcon,
  LocateIcon,
  PlusIcon,
  TimeIcon,
} from '@amp/ads-ui/icons';

import useItemList from '@shared/hooks/use-item-list/use-item-list';
import useObjectUrl from '@shared/hooks/use-object-url/use-object-url';
import CategoryChipGroup from '@shared/ui/button/category-chip-group/category-chip-group';
import { CATEGORIES } from '@shared/ui/button/category-chip-group/category-chip-labels';
import AddedItem from '@shared/ui/form/added-item/added-item';
import FormField from '@shared/ui/form/form-field/form-field';

import * as styles from './event-create.css';

interface FormState {
  imageUrl: string;
  eventTitle: string;
  scheduleDate: string;
  scheduleTime: string;
  eventLocation: string;
  boothTitle: string;
  boothLocation: string;
}
interface ScheduleItem {
  id: string;
  date: string;
  time: string;
}

interface BoothItem {
  id: string;
  title: string;
  location?: string;
}

const isFilled = (value: string) => {
  return value.trim() !== '';
};

const INITIAL_FORM_STATE: FormState = {
  imageUrl: '',
  eventTitle: '',
  scheduleDate: '',
  scheduleTime: '',
  eventLocation: '',
  boothTitle: '',
  boothLocation: '',
};

const EventCreatePage = () => {
  const [activeCategoryIds, setActiveCategoryIds] = useState<number[]>([]);
  const [form, setForm] = useState<FormState>(INITIAL_FORM_STATE);

  const image = useObjectUrl();
  const schedules = useItemList<ScheduleItem>();
  const booths = useItemList<BoothItem>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) {
      return;
    }

    // TODO: API 연결
  };

  const setField = (name: keyof FormState, value: string) => {
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const selectCategoryId = (id: number, nextSelected: boolean) => {
    setActiveCategoryIds((prev) =>
      nextSelected
        ? [...prev, id]
        : prev.filter((categoryId) => categoryId !== id),
    );
  };

  const addSchedule = () => {
    schedules.add({ date: form.scheduleDate, time: form.scheduleTime });
    setForm((prev) => ({ ...prev, scheduleDate: '', scheduleTime: '' }));
  };

  const addBooth = () => {
    booths.add({
      title: form.boothTitle,
      location: form.boothLocation.trim() ? form.boothLocation : undefined,
    });
    setForm((prev) => ({ ...prev, boothTitle: '', boothLocation: '' }));
  };

  const canAddSchedule =
    isFilled(form.scheduleDate) && isFilled(form.scheduleTime);

  const canAddBooth = isFilled(form.boothTitle);

  const hasImage = Boolean(image.url);

  const hasCategory = activeCategoryIds.length > 0;

  const canSubmit =
    isFilled(form.eventTitle) &&
    isFilled(form.eventLocation) &&
    schedules.items.length > 0 &&
    hasImage &&
    hasCategory;

  return (
    <section className={styles.pageContainer}>
      <form onSubmit={handleSubmit}>
        <section className={styles.scrollArea}>
          {/* TODO: 섹션별 컴포넌트 분리 */}
          <p className={styles.sectionText({ kind: 'title' })}>기본 정보</p>
          <p className={styles.sectionText({ kind: 'subText' })}>
            공연에 대한 기본적인 정보들을 적어주세요.
          </p>

          <FormField label='공연 이미지'>
            <div className={styles.addImageContainer}>
              <AddImageButton
                imageUrl={image.url}
                onFileChange={image.setFile}
              />
            </div>
          </FormField>

          <FormField id='eventTitle' label='공연명'>
            <Textfield
              name='eventTitle'
              variant='default'
              placeholder='공연명을 입력해주세요.'
              value={form.eventTitle}
              onChange={(e) => setField('eventTitle', e.target.value)}
            />
          </FormField>

          <FormField id='scheduleDate' label='공연 일시'>
            <div className={styles.grid}>
              <Textfield
                id='scheduleDate'
                name='scheduleDate'
                variant='date'
                placeholder='공연 일자'
                value={form.scheduleDate}
                onChange={(e) => setField('scheduleDate', e.target.value)}
              />
              <Textfield
                id='scheduleTime'
                name='scheduleTime'
                variant='time'
                placeholder='공연 시작 시간'
                value={form.scheduleTime}
                onChange={(e) => setField('scheduleTime', e.target.value)}
              />
            </div>

            <CtaButton
              type='icon'
              htmlType='button'
              onClick={addSchedule}
              className={styles.addButton}
              disabled={!canAddSchedule}
            >
              <PlusIcon />
              추가하기
            </CtaButton>

            <AddedItem
              items={schedules.items}
              onRemove={schedules.remove}
              getItem={(item) => ({
                id: item.id,
                first: item.date,
                second: item.time,
                firstIcon: <CalendarIcon />,
                secondIcon: <TimeIcon />,
                secondVariant: 'default',
              })}
            />
          </FormField>

          <FormField id='eventLocation' label='공연 장소'>
            <Textfield
              id='eventLocation'
              name='eventLocation'
              variant='default'
              placeholder='공연 장소를 입력해주세요.'
              value={form.eventLocation}
              onChange={(e) => setField('eventLocation', e.target.value)}
            />
          </FormField>

          <div className={styles.divider} />

          <p className={styles.sectionText({ kind: 'title' })}>
            무대 / 부스 정보
          </p>
          <p className={styles.sectionText({ kind: 'subText' })}>
            무대와 부스를 추가하면,
            <br />
            관객이 현장 복잡도를 직접 입력할 수 있어요.
          </p>

          <FormField id='boothTitle'>
            <Textfield
              id='boothTitle'
              name='boothTitle'
              variant='flag'
              value={form.boothTitle}
              placeholder='무대, 부스명을 입력해주세요.'
              onChange={(e) => setField('boothTitle', e.target.value)}
            />
            <Textfield
              id='boothLocation'
              name='boothLocation'
              variant='location'
              value={form.boothLocation}
              placeholder='위치를 입력해주세요. (선택)'
              onChange={(e) => setField('boothLocation', e.target.value)}
            />
            <CtaButton
              type='icon'
              htmlType='button'
              onClick={addBooth}
              className={styles.addButton}
              disabled={!canAddBooth}
            >
              <PlusIcon />
              추가하기
            </CtaButton>

            <AddedItem
              items={booths.items}
              onRemove={booths.remove}
              getItem={(item) => ({
                id: item.id,
                first: item.title,
                second: item.location,
                firstIcon: <FlagIcon />,
                secondIcon: <LocateIcon />,
                secondVariant: 'location',
              })}
            />
          </FormField>

          <div className={styles.divider} />

          <p className={styles.sectionText({ kind: 'title' })}>공지 카테고리</p>
          <p className={styles.sectionText({ kind: 'subText' })}>
            작성할 공지의 카테고리를 모두 선택해주세요.
          </p>
          <CategoryChipGroup
            categories={CATEGORIES}
            activeCategoryIds={activeCategoryIds}
            onToggle={selectCategoryId}
          />
        </section>
        <section className={styles.bottom}>
          <CtaButton
            type='common'
            htmlType='submit'
            color='gray'
            disabled={!canSubmit}
          >
            완료
          </CtaButton>
        </section>
      </form>
    </section>
  );
};

export default EventCreatePage;

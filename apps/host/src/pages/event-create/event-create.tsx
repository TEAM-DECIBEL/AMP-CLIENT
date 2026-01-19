import { useEffect, useState } from 'react';

import { AddImageButton } from '@amp/ads-ui';
import { CtaButton } from '@amp/ads-ui';
import { Textfield } from '@amp/ads-ui';
import { FlagIcon, PlusIcon } from '@amp/ads-ui/icons';
import { CalendarIcon } from '@amp/ads-ui/icons';
import { TimeIcon } from '@amp/ads-ui/icons';
import { LocateIcon } from '@amp/ads-ui/icons';

import CategoryChipGroup from '@shared/ui/button/category-chip-group/category-chip-group';
import { CATEGORIES } from '@shared/ui/button/category-chip-group/category-chip-labels';
import AddedItem from '@shared/ui/form/added-item/added-item';
import FormField from '@shared/ui/form/form-field/form-field';

import * as styles from './event-create.css';

type FormState = {
  imageUrl: string;
  eventTitle: string;
  scheduleDate: string;
  scheduleTime: string;
  eventLocation: string;
  boothTitle: string;
  boothLocation: string;
};
type ScheduleItem = {
  id: string;
  date: string;
  time: string;
};

type BoothItem = {
  id: string;
  title: string;
  location?: string;
};

const isFilled = (value: string) => {
  return value.trim() !== '';
};

const EventCreatePage = () => {
  const [activeCategoryIds, setActiveCategoryIds] = useState<number[]>([]);
  const [form, setForm] = useState<FormState>({
    imageUrl: '',
    eventTitle: '',
    scheduleDate: '',
    scheduleTime: '',
    eventLocation: '',
    boothTitle: '',
    boothLocation: '',
  });

  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([]);
  const [boothItems, setBoothItems] = useState<BoothItem[]>([]);

  const setField = (name: keyof FormState, value: string) => {
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFileChange = (newFile: File) => {
    setField('imageUrl', URL.createObjectURL(newFile));
  };

  useEffect(() => {
    return () => {
      if (form.imageUrl !== '') {
        URL.revokeObjectURL(form.imageUrl);
      }
    };
  }, [form.imageUrl]);

  const selectCategoryId = (id: number) => {
    setActiveCategoryIds((prev) =>
      prev.includes(id)
        ? prev.filter((categoryId) => categoryId !== id)
        : [...prev, id],
    );
  };

  const addSchedule = () => {
    setScheduleItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        date: form.scheduleDate,
        time: form.scheduleTime,
      },
    ]);

    setField('scheduleDate', '');
    setField('scheduleTime', '');
  };

  const addBooth = () => {
    setBoothItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: form.boothTitle,
        location: form.boothLocation || undefined,
      },
    ]);

    setField('boothTitle', '');
    setField('boothLocation', '');
  };

  const removeSchedule = (id: string) => {
    setScheduleItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const removeBooth = (id: string) => {
    setBoothItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const hasImage = Boolean(form.imageUrl);
  const hasCategory = activeCategoryIds.length > 0;

  const canAddSchedule =
    isFilled(form.scheduleDate) && isFilled(form.scheduleTime);
  const canAddBooth = isFilled(form.boothTitle);

  const canSubmit =
    isFilled(form.eventTitle) &&
    isFilled(form.scheduleDate) &&
    isFilled(form.scheduleTime) &&
    isFilled(form.eventLocation) &&
    hasImage &&
    hasCategory;

  return (
    <section className={styles.pageContainer}>
      <form>
        <section className={styles.scrollArea}>
          <p className={styles.sectionText({ kind: 'title' })}>기본 정보</p>
          <p className={styles.sectionText({ kind: 'subText' })}>
            공연에 대한 기본적인 정보들을 적어주세요.
          </p>

          <FormField label='공연 이미지'>
            <div className={styles.addImageContainer}>
              <AddImageButton
                imageUrl={form.imageUrl}
                onFileChange={handleFileChange}
              />
            </div>
          </FormField>

          <FormField label='공연명'>
            <Textfield
              name='eventTitle'
              variant='default'
              placeholder='공연명을 입력해주세요.'
              onChange={(e) => setField('eventTitle', e.target.value)}
            />
          </FormField>

          <FormField label='공연 일시'>
            {/* TODO: Textfield 수정 */}
            <Textfield
              name='scheduleDate'
              variant='default'
              placeholder='공연 일자'
              value={form.scheduleDate}
              onChange={(e) => setField('scheduleDate', e.target.value)}
            />
            <Textfield
              name='scheduleTime'
              variant='default'
              placeholder='공연 시작 시간'
              value={form.scheduleTime}
              onChange={(e) => setField('scheduleTime', e.target.value)}
            />
            <CtaButton
              type='icon'
              onClick={addSchedule}
              className={styles.addButton}
              disabled={!canAddSchedule}
            >
              <PlusIcon />
              추가하기
            </CtaButton>

            <AddedItem
              items={scheduleItems}
              onRemove={removeSchedule}
              getId={(item) => item.id}
              getFirst={(item) => item.date}
              getSecond={(item) => item.time}
              firstIcon={<CalendarIcon />}
              secondIcon={<TimeIcon />}
              secondType='time'
            />
          </FormField>

          <FormField label='공연 장소'>
            <Textfield
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

          <FormField>
            {/* TODO: Textfield 수정 */}
            <Textfield
              name='boothTitle'
              variant='icon'
              value={form.boothTitle}
              placeholder='무대, 부스명을 입력해주세요.'
              onChange={(e) => setField('boothTitle', e.target.value)}
            />
            <Textfield
              name='boothLocation'
              variant='default'
              value={form.boothLocation}
              placeholder='위치를 입력해주세요. (선택)'
              onChange={(e) => setField('boothLocation', e.target.value)}
            />
            <CtaButton
              type='icon'
              onClick={addBooth}
              className={styles.addButton}
              disabled={!canAddBooth}
            >
              <PlusIcon />
              추가하기
            </CtaButton>

            <AddedItem
              items={boothItems}
              onRemove={removeBooth}
              getId={(item) => item.id}
              getFirst={(item) => item.title}
              getSecond={(item) => (item.location ? item.location : '')}
              firstIcon={<FlagIcon />}
              secondIcon={<LocateIcon />}
              secondType='location'
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
            color='gray'
            onClick={() => {}} // TODO: API 연결
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

import { useRef } from 'react';

export const useDragScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragRef = useRef(false);
  const startXRef = useRef(0);

  const onDragStart = (e: React.MouseEvent) => {
    if (e.button !== 0) {
      return;
    }

    e.preventDefault();

    isDragRef.current = true;
    startXRef.current = e.pageX + (scrollRef.current?.scrollLeft || 0);
  };

  const onDragEnd = () => {
    isDragRef.current = false;
  };

  const onDragMove = (e: React.MouseEvent) => {
    if (!isDragRef.current || !scrollRef.current) {
      return;
    }

    scrollRef.current.scrollLeft = startXRef.current - e.pageX;
  };

  return {
    scrollRef,
    onDragStart,
    onDragEnd,
    onDragMove,
  };
};

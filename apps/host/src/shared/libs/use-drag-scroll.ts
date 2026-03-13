import { useRef, useState } from 'react';

export const useDragScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const onDragStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + (scrollRef.current?.scrollLeft || 0));
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e: React.MouseEvent) => {
    if (!isDrag || !scrollRef.current) {
      return;
    }
    scrollRef.current.scrollLeft = startX - e.pageX;
  };

  return { scrollRef, onDragStart, onDragEnd, onDragMove };
};

import { useRef, useState } from 'react';
import type { MouseEvent, UIEvent } from 'react';

interface DragState {
  isMouseDown: boolean;
  startX: number;
  startScrollLeft: number;
}

interface UseDraggableCarouselParams {
  itemCount: number;
}

const INITIAL_DRAG_STATE: DragState = {
  isMouseDown: false,
  startX: 0,
  startScrollLeft: 0,
};

const getSnapScrollLeft = (element: HTMLElement) => {
  if (element.clientWidth === 0) {
    return 0;
  }

  return (
    Math.round(element.scrollLeft / element.clientWidth) * element.clientWidth
  );
};

export const useDraggableCarousel = ({
  itemCount,
}: UseDraggableCarouselParams) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const dragStateRef = useRef<DragState>(INITIAL_DRAG_STATE);
  const isIndicatorVisible = itemCount > 1;

  const handleScroll = (event: UIEvent<HTMLUListElement>) => {
    const { scrollLeft, clientWidth } = event.currentTarget;
    if (clientWidth === 0) {
      return;
    }

    setCurrentPage(Math.round(scrollLeft / clientWidth) + 1);
  };

  const handleMouseDown = (event: MouseEvent<HTMLUListElement>) => {
    dragStateRef.current = {
      isMouseDown: true,
      startX: event.clientX,
      startScrollLeft: event.currentTarget.scrollLeft,
    };
    setIsDragging(true);
  };

  const handleMouseMove = (event: MouseEvent<HTMLUListElement>) => {
    if (!dragStateRef.current.isMouseDown) {
      return;
    }

    const deltaX = event.clientX - dragStateRef.current.startX;
    event.currentTarget.scrollLeft =
      dragStateRef.current.startScrollLeft - deltaX;
  };

  const handleMouseUp = () => {
    if (!dragStateRef.current.isMouseDown) {
      return;
    }

    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: getSnapScrollLeft(trackRef.current),
        behavior: 'smooth',
      });
    }

    dragStateRef.current = INITIAL_DRAG_STATE;
    setIsDragging(false);
  };

  return {
    currentPage,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleScroll,
    isDragging,
    isIndicatorVisible,
    trackRef,
  };
};

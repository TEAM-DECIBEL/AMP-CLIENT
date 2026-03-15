import { useRef, useState } from 'react';
import type { MouseEvent, TouchEvent, UIEvent } from 'react';

interface DragState {
  isPointerDown: boolean;
  startX: number;
  startScrollLeft: number;
}

interface UseDraggableCarouselParams {
  itemCount: number;
}

const INITIAL_DRAG_STATE: DragState = {
  isPointerDown: false,
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

  const startDrag = (startX: number, startScrollLeft: number) => {
    dragStateRef.current = {
      isPointerDown: true,
      startX,
      startScrollLeft,
    };
    setIsDragging(true);
  };

  const updateDrag = (currentX: number, element: HTMLUListElement) => {
    if (!dragStateRef.current.isPointerDown) {
      return;
    }

    const deltaX = currentX - dragStateRef.current.startX;
    element.scrollLeft = dragStateRef.current.startScrollLeft - deltaX;
  };

  const handleMouseDown = (event: MouseEvent<HTMLUListElement>) => {
    startDrag(event.clientX, event.currentTarget.scrollLeft);
  };

  const handleMouseMove = (event: MouseEvent<HTMLUListElement>) => {
    updateDrag(event.clientX, event.currentTarget);
  };

  const handleTouchStart = (event: TouchEvent<HTMLUListElement>) => {
    const touch = event.touches[0];
    if (!touch) {
      return;
    }

    startDrag(touch.clientX, event.currentTarget.scrollLeft);
  };

  const handleTouchMove = (event: TouchEvent<HTMLUListElement>) => {
    const touch = event.touches[0];
    if (!touch) {
      return;
    }

    updateDrag(touch.clientX, event.currentTarget);
  };

  const endDrag = () => {
    if (!dragStateRef.current.isPointerDown) {
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

  const handleMouseUp = () => {
    endDrag();
  };

  const handleTouchEnd = () => {
    endDrag();
  };

  return {
    currentPage,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleScroll,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    isDragging,
    isIndicatorVisible,
    trackRef,
  };
};

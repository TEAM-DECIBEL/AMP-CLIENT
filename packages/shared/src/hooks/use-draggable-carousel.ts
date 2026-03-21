import { useEffect, useRef, useState } from 'react';
import type { MouseEvent, TouchEvent, UIEvent } from 'react';

interface DragState {
  isPointerDown: boolean;
  startX: number;
  startScrollLeft: number;
  deltaX: number;
}

interface UseDraggableCarouselParams {
  itemCount: number;
}

const INITIAL_DRAG_STATE: DragState = {
  isPointerDown: false,
  startX: 0,
  startScrollLeft: 0,
  deltaX: 0,
};
const SWIPE_THRESHOLD_RATIO = 0.2;

const getStartIndex = (startScrollLeft: number, clientWidth: number) => {
  if (clientWidth === 0) {
    return 0;
  }

  return Math.round(startScrollLeft / clientWidth);
};

const getMovedRatio = (deltaX: number, clientWidth: number) => {
  if (clientWidth === 0) {
    return 0;
  }

  return Math.abs(deltaX) / clientWidth;
};

const getSwipeDirection = (deltaX: number) => {
  if (deltaX > 0) {
    return -1;
  }

  if (deltaX < 0) {
    return 1;
  }

  return 0;
};

const getNextIndex = ({
  clientWidth,
  deltaX,
  itemCount,
  startScrollLeft,
}: {
  clientWidth: number;
  deltaX: number;
  itemCount: number;
  startScrollLeft: number;
}) => {
  const startIndex = getStartIndex(startScrollLeft, clientWidth);
  const movedRatio = getMovedRatio(deltaX, clientWidth);

  if (movedRatio < SWIPE_THRESHOLD_RATIO) {
    return startIndex;
  }

  const direction = getSwipeDirection(deltaX);
  return Math.min(Math.max(startIndex + direction, 0), itemCount - 1);
};

export const useDraggableCarousel = ({
  itemCount,
}: UseDraggableCarouselParams) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const dragStateRef = useRef<DragState>(INITIAL_DRAG_STATE);
  const currentPageRef = useRef(1);
  const rafRef = useRef<number | null>(null);
  const lockedPageRef = useRef<number | null>(null);
  const isIndicatorVisible = itemCount > 1;

  const handleScroll = (event: UIEvent<HTMLUListElement>) => {
    const { scrollLeft, clientWidth } = event.currentTarget;
    if (clientWidth === 0) {
      return;
    }

    const nextPage = Math.round(scrollLeft / clientWidth) + 1;

    if (dragStateRef.current.isPointerDown) {
      return;
    }

    if (lockedPageRef.current !== null && lockedPageRef.current !== nextPage) {
      return;
    }

    if (lockedPageRef.current === nextPage) {
      lockedPageRef.current = null;
    }

    if (currentPageRef.current === nextPage) {
      return;
    }

    currentPageRef.current = nextPage;
    setCurrentPage(nextPage);
  };

  const startDrag = (startX: number, startScrollLeft: number) => {
    dragStateRef.current = {
      isPointerDown: true,
      startX,
      startScrollLeft,
      deltaX: 0,
    };
    setIsDragging(true);
  };

  const scrollToIndex = (index: number) => {
    if (!trackRef.current) {
      return;
    }

    const nextIndex = Math.min(Math.max(index, 0), itemCount - 1);
    const { clientWidth } = trackRef.current;
    const nextPage = nextIndex + 1;

    lockedPageRef.current = nextPage;
    currentPageRef.current = nextPage;
    setCurrentPage(nextPage);
    trackRef.current.scrollTo({
      left: nextIndex * clientWidth,
      behavior: 'smooth',
    });
  };

  const updateDrag = (currentX: number, element: HTMLUListElement) => {
    if (!dragStateRef.current.isPointerDown) {
      return;
    }

    const deltaX = currentX - dragStateRef.current.startX;
    dragStateRef.current.deltaX = deltaX;

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      element.scrollLeft = dragStateRef.current.startScrollLeft - deltaX;
      rafRef.current = null;
    });
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

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    if (trackRef.current) {
      const { clientWidth } = trackRef.current;
      const nextIndex = getNextIndex({
        clientWidth,
        deltaX: dragStateRef.current.deltaX,
        itemCount,
        startScrollLeft: dragStateRef.current.startScrollLeft,
      });
      scrollToIndex(nextIndex);
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

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

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

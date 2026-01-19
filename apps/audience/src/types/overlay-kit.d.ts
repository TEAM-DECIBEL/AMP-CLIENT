declare module 'overlay-kit' {
  import type { ReactNode } from 'react';

  type OverlayController = {
    isOpen: boolean;
    close: () => void;
    unmount: () => void;
  };

  export const overlay: {
    open: (render: (controller: OverlayController) => ReactNode) => void;
  };

  export const OverlayProvider: ({
    children,
  }: {
    children?: ReactNode;
  }) => JSX.Element;
}

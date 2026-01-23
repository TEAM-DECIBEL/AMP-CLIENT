declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FC<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

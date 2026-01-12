import { StrictMode } from 'react';
import { OverlayProvider } from 'overlay-kit';
import { createRoot } from 'react-dom/client';

import App from '@app/App';

import '@amp/ads-ui/styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OverlayProvider>
      <App />
    </OverlayProvider>
  </StrictMode>,
);

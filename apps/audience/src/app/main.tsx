import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';

import { OverlayProvider, ToastContainer } from '@amp/ads-ui';

import App from '@app/App';

import '@amp/ads-ui/styles';

registerSW({ immediate: true });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OverlayProvider>
      <App />
      <ToastContainer />
    </OverlayProvider>
  </StrictMode>,
);

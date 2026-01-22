import { useEffect } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router';
import { listenForegroundMessages } from 'src/push-foreground';

import { queryClient } from '@shared/apis/query-client';

import { router } from './router/router';

function App() {
  useEffect(() => {
    listenForegroundMessages((payload) => {
      console.log('[FCM][foreground]', payload);

      //TODO 
      // queryClient.invalidateQueries({ queryKey: ['notifications'] });
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

/// <reference lib="webworker" />

import { initializeApp } from 'firebase/app';
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw';
import { precacheAndRoute, type PrecacheEntry } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

declare let self: ServiceWorkerGlobalScope & {
  __WB_MANIFEST?: Array<PrecacheEntry | string>;
};

try {
  precacheAndRoute(self.__WB_MANIFEST ?? []);
} catch (e) {
  console.warn('[SW] precacheAndRoute failed:', e);
}

try {
  registerRoute(
    ({ request }) => request.mode === 'navigate',
    new NetworkFirst({ cacheName: 'html-cache' }),
  );
} catch (e) {
  console.warn('[SW] registerRoute failed:', e);
}

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
});

const messaging = getMessaging(firebaseApp);

type NotiData = {
  festivalId?: string;
  noticeId?: string;
};

onBackgroundMessage(messaging, (payload) => {
  console.log('[SW] onBackgroundMessage:', payload);

  const title = payload.notification?.title ?? '알림';
  const body = payload.notification?.body ?? '';

  const festivalId = payload.data?.festivalId;
  const noticeId = payload.data?.noticeId;

  self.registration.showNotification(title, {
    body,
    data: { festivalId, noticeId } satisfies NotiData,
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const data = (event.notification.data ?? {}) as NotiData;

  const festivalId = data.festivalId;
  const noticeId = data.noticeId;

  const link =
    festivalId && noticeId ? `/events/${festivalId}/notices/${noticeId}` : '/';

  const url = new URL(link, self.location.origin).toString();

  event.waitUntil(
    (async () => {
      const clientList = await self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true,
      });

      const windowClients = clientList.filter(
        (c): c is WindowClient => 'focus' in c && 'navigate' in c,
      );

      const target = windowClients.find((c) => {
        const u = new URL(c.url);
        return u.origin === self.location.origin;
      });

      if (target) {
        await target.focus();
        await target.navigate(url);
        return;
      }

      await self.clients.openWindow(url);
    })(),
  );
});

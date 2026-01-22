import { getMessaging, getToken, isSupported } from 'firebase/messaging';

import { firebaseApp } from './firebase';

export async function enablePushAndGetToken() {
  const permission = await Notification.requestPermission();
  if (permission !== 'granted') {
    return null;
  }

  const supported = await isSupported();
  if (!supported) {
    return null;
  }

  const messaging = getMessaging(firebaseApp);

  const swReg = await navigator.serviceWorker.ready;

  const token = await getToken(messaging, {
    vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
    serviceWorkerRegistration: swReg,
  });

  return token;
}

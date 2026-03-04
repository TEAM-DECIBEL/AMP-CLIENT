import { getMessaging, getToken, isSupported } from 'firebase/messaging';

import { postFcmToken } from '@entities/user/api/user';

import { firebaseApp } from '@shared/configs/firebase';

const LS_PUSH_PERMISSION_REQUESTED = 'push:permissionRequested';

async function canUseFcm() {
  const supported = await isSupported();
  if (!supported) {
    return false;
  }

  if (!('serviceWorker' in navigator)) {
    return false;
  }

  return true;
}

const getFcmTokenInternal = async () => {
  if (!(await canUseFcm())) {
    return null;
  }

  const messaging = getMessaging(firebaseApp);
  const swReg = await navigator.serviceWorker.ready;

  try {
    return await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
      serviceWorkerRegistration: swReg,
    });
  } catch (e) {
    console.warn('[push] getToken failed', e);
    return null;
  }
};

export const enablePushAndGetToken = async () => {
  localStorage.setItem(LS_PUSH_PERMISSION_REQUESTED, 'true');

  const permission = await Notification.requestPermission();
  if (permission !== 'granted') {
    return null;
  }

  const token = await getFcmTokenInternal();
  if (!token) {
    return null;
  }

  await postFcmTokenIfChanged(token);

  return token;
};

export const getFcmTokenSilently = async () => {
  if (Notification.permission !== 'granted') {
    return null;
  }
  return await getFcmTokenInternal();
};

export async function postFcmTokenIfChanged(token: string) {
  if (!token) {
    return;
  }

  try {
    await postFcmToken(token);
  } catch (e) {
    console.warn('[push] postFcmToken failed', e);
  }
}

export async function syncFcmTokenOnLogin(options?: {
  onlyIfPermissionRequested?: boolean;
}) {
  const onlyIfPermissionRequested = options?.onlyIfPermissionRequested ?? false;

  if (onlyIfPermissionRequested) {
    const requested =
      localStorage.getItem(LS_PUSH_PERMISSION_REQUESTED) === 'true';
    if (!requested) {
      return;
    }
  }

  const token = await getFcmTokenSilently();
  if (!token) {
    return;
  }

  await postFcmTokenIfChanged(token);
}

export function hasRequestedPushPermission() {
  return localStorage.getItem(LS_PUSH_PERMISSION_REQUESTED) === 'true';
}

import {
  getMessaging,
  isSupported,
  type MessagePayload,
  onMessage,
} from 'firebase/messaging';

import { firebaseApp } from './firebase';

export async function listenForegroundMessages(
  onReceive: (payload: MessagePayload) => void,
) {
  const supported = await isSupported();
  if (!supported) {
    return;
  }

  const messaging = getMessaging(firebaseApp);

  onMessage(messaging, (payload) => {
    onReceive(payload);
  });
}

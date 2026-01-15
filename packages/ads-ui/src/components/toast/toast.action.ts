import { useToastStore } from './toast.store';

export const toast = {
  show: (title: string, description?: string) => {
    useToastStore.getState().show({ title, description });
  },
};

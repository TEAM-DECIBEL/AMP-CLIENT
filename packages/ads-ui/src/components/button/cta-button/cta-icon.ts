import type { ComponentType } from 'react';

import { GoogleIcon, PenIcon, PlusIcon } from '../../../icons';
import { CtaButtonType } from './cta-button';

export const ICON: Partial<Record<CtaButtonType, ComponentType>> = {
  social: GoogleIcon,
  icon: PenIcon,
  add: PlusIcon,
};

export const SELECT_PRESET = {
  role: {
    audience: '관객으로 시작하기',
    host: '주최사로 시작하기',
  },
  crowding: {
    low: '여유',
    medium: '보통',
    high: '혼잡',
  },
} as const;

export type RoleVariant = keyof typeof SELECT_PRESET.role; // 'audience' | 'host'
export type CrowdingVariant = keyof typeof SELECT_PRESET.crowding; // 'low' | 'medium' | 'high'

export type SelectPreset =
  | { kind: 'role'; variant: RoleVariant }
  | { kind: 'crowding'; variant: CrowdingVariant };

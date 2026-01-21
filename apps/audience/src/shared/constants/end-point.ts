export const END_POINT = {
  // 홈 화면
  GET_ALL_FESTIVALS: '/users/festivals',
  GET_PLANNED_FESTIVALS: '/users/me/festivals',
  GET_UPCOMING_FESTIVAL: '/users/me/festivals/recent',
  PUT_WISH_LIST: (festivalId: number) =>
    `/users/me/festivals/${festivalId}/wishList`,
  //온보딩
  POST_ONBOARDING_COMPLETE: '/auth/onboarding/complete',
} as const;

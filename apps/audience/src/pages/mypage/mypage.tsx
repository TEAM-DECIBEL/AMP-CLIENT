import { useNavigate } from 'react-router';

import { MyPageMenuContainer, MyPageMenuItem } from '@amp/ads-ui';

import { ROUTE_PATH } from '@shared/constants/path';

const MyPage = () => {
  const navigate = useNavigate();

  const MENU = [
    {
      id: 'my-events',
      label: '내 관람 공연',
      path: `/${ROUTE_PATH.MY_EVENTS}`,
      disabled: false,
    },
    {
      id: 'saved-notices',
      label: '저장한 공지',
      path: `/${ROUTE_PATH.SAVED_NOTICES}`,
      disabled: true,
    },
  ];
  return (
    <div>
      <MyPageMenuContainer>
        {MENU.map((menu) => (
          <MyPageMenuItem
            key={menu.id}
            disabled={menu.disabled}
            onClick={() => navigate(menu.path)}
          >
            {menu.label}
          </MyPageMenuItem>
        ))}
      </MyPageMenuContainer>
    </div>
  );
};

export default MyPage;

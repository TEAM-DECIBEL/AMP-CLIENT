import { CtaButton } from '@amp/ads-ui';
import React from 'react';

const HomePage = () => {
  const [iconSelected, setIconSelected] = React.useState(false);

  return (
    <>
      <div style={{ padding: 24, display: 'grid', gap: 16, maxWidth: 420 }}>
        {/* primary */}
        <CtaButton
          tone='primary'
          onClick={() => {
            console.log('[primary] click');
            alert('primary 클릭');
          }}
        >
          다음으로
        </CtaButton>
        <CtaButton
          tone='primary'
          disabled
          onClick={() => alert('여긴 뜨면 안 됨')}
        >
          다음으로
        </CtaButton>

        {/* gray */}
        <CtaButton
          tone='gray'
          onClick={() => {
            console.log('[gray] click');
            alert('gray 클릭');
          }}
        >
          다음으로
        </CtaButton>
        <CtaButton
          tone='gray'
          disabled
          onClick={() => {
            console.log('[gray] click');
            alert('gray 클릭');
          }}
        >
          다음으로
        </CtaButton>

        {/* social */}
        <CtaButton
          tone='social'
          onClick={() => {
            console.log('[social] click');
            alert('social 클릭');
          }}
        >
          Google로 시작하기
        </CtaButton>
      </div>
      {/* icon default */}

      {/* icon selected (토글) */}
      {/* <CtaButton
        tone='icon'
        selected={iconSelected}
        onClick={() => {
          console.log('[icon] toggle:', !iconSelected);
          setIconSelected(!iconSelected);
        }}
      >
        수정하기
      </CtaButton> */}

      <div style={{ padding: 24, display: 'grid', gap: 16, maxWidth: 184 }}>
        <CtaButton
          tone='icon'
          selected={iconSelected}
          onClick={() => {
            console.log('[icon] click (unselected -> selected)');
            setIconSelected(!iconSelected);
          }}
        >
          수정하기
        </CtaButton>

        <CtaButton tone='icon' selected disabled>
          수정하기
        </CtaButton>
      </div>
    </>
  );
};

export default HomePage;

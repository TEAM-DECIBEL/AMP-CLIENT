import { useState } from 'react';

import { CtaButton, StatusSheet } from '@amp/ads-ui';

const HomePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <CtaButton type='primary' onClick={() => setOpen(true)}>
        상태 모달 테스트
      </CtaButton>
      <StatusSheet open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default HomePage;

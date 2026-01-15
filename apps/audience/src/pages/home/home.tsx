import HomeBanner from '@widgets/banner/home-banner/home-banner';

const HomePage = () => {
  return (
    <div>
      <HomeBanner
        nickname='관객 이름'
        status='card'
        title='Grand Mint Festival'
        location='올림픽공원 일대'
        date='2025. 10. 18 - 2025. 10. 19'
        dday={0}
      />
      관객 홈페이지
    </div>
  );
};

export default HomePage;

import Lottie from 'lottie-react';

import loadingJson from '../assets/loading.json';

import * as styles from './loading.css';

const Loading = () => {
  return (
    <div className={styles.container}>
      <Lottie animationData={loadingJson} loop={true} autoplay={true} />
    </div>
  );
};

export default Loading;

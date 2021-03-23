import React from 'react';
import landscape from 'shared/assets/images/landscapeAnimated.mp4';
import styles from './about.module.sass';

// TODO: video loading
const AboutPage: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__video}>
        <video autoPlay muted width="100%" height="auto" onEnded={() => console.log("video ends")}>
          <source type='video/mp4' src={landscape} />
        </video>
      </div>
    </div>
  );
}

export default AboutPage;

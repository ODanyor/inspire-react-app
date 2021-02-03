import React, { useEffect, useState, useRef } from 'react';
import { useImageLoad } from 'shared/hooks';

import Section1 from './Section-1';
import Section2 from './Section-2';
import Section3 from './Section-3';

import { Slider } from 'shared/components';

import styles from './home.module.scss';
import bgHigh from 'shared/assets/images/background-high.jpg';
import bgLow from 'shared/assets/images/background-low.jpg';

const sections = [Section1, Section2, Section3];

const Sections: React.FC<{sections: any, ref: any}> = React.forwardRef(({ sections }, ref: any) => {
  return (
    <div className={styles.sections} ref={ref}>
      {sections.map((Section: any, index: number) => <Section key={index} />)}
    </div>
  );
});

const HomePage: React.FC = () => {
  const [section, setSection] = useState(0);
  const pageContainerRef = useRef(null);
  const backgroundImgRef = useRef(null);
  const sectionRef = useRef(null);
  const bg = useImageLoad(bgHigh, bgLow); // the background image

  function handleSwitchSection() {
    setSection((section + 1) % sections.length);
  }

  useEffect(() => {
    // @ts-ignore
    sectionRef.current.style.transform = `translateX(-${section * 100}vw)`;

    // @ts-ignore
    backgroundImgRef.current.style.width = sections.length * 100 + 'vw';
    // @ts-ignore
    backgroundImgRef.current.style.transform = `translateX(-${section * 100}vw)`;
  }, [section]);

  return (
    <div className={styles.main} ref={pageContainerRef} onClick={handleSwitchSection}>
      <img
        alt='bg'
        src={bg.current}
        className={styles.main__background}
        ref={backgroundImgRef} />

      <Sections sections={sections} ref={sectionRef} />

      <Slider slides={sections.length} current={section} />
    </div>
  );
}

export default HomePage;

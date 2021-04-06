import React, { useEffect, useRef, forwardRef } from 'react';
import { useImageLoad, useHandleValue } from 'shared/hooks';
import { SectionProps, SectionsProps } from 'shared/interfaces';
import { Slider } from 'shared/components';

import Section1 from './Section-1';
import Section2 from './Section-2';
import Section3 from './Section-3';

import styles from './home.module.sass';
import bgHigh from 'shared/assets/images/background-high.jpg';
import bgLow from 'shared/assets/images/background-low.jpg';

// NOTE: Extendable with new sections wrapped via HOC Section
const sections = [Section1, Section2, Section3];

const Sections: React.FC<SectionsProps> = forwardRef(({ sections, ...rest }, ref) => (
  <div className={styles.sections} ref={ref}>
    {sections.map((Section: React.FC<SectionProps>, index: number) => <Section key={index} {...rest} />)}
  </div>
));

const HomePage: React.FC = () => {
  const section = useHandleValue<number>(0);
  const pageContainerRef = useRef<HTMLDivElement>(null);
  const backgroundImgRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const bg = useImageLoad(bgHigh, bgLow); // background image

  useEffect(() => {
    sectionRef.current!.style.transform = `translateX(-${section.controls.value * 100}vw)`;

    backgroundImgRef.current!.style.width = sections.length * 100 + 'vw';
    backgroundImgRef.current!.style.transform = `translateX(-${section.controls.value * 100}vw)`;
  }, [section.controls.value]);

  return (
    <div className={styles.main} ref={pageContainerRef}>
      <img
        alt='bg'
        src={bg.current}
        className={styles.main__background}
        ref={backgroundImgRef} />
      <Sections sections={sections} ref={sectionRef} setSection={section.setValue} />
      <Slider slides={sections.length} current={section.controls.value} setSection={section.setValue} />
    </div>
  );
}

export default HomePage;

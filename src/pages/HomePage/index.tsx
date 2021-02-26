import React, { ElementType, useEffect, useRef } from 'react';
import { useImageLoad, useHandleValue } from 'shared/hooks';

import Section1 from './Section-1';
import Section2 from './Section-2';
import Section3 from './Section-3';

import { Slider } from 'shared/components';

import styles from './home.module.sass';
import bgHigh from 'shared/assets/images/background-high.jpg';
import bgLow from 'shared/assets/images/background-low.jpg';

const sections = [Section1, Section2, Section3]; // Extendable with new sections wrapped by Section HOC

interface SectionProps {
  setSection(event: number): void;
}

interface SectionsProps extends SectionProps {
  sections: React.FC<SectionProps>[];
  ref: any;
}

const Sections: React.FC<SectionsProps> = React.forwardRef(({ sections, ...rest }, ref: any) => {
  return (
    <div className={styles.sections} ref={ref}>
      {sections.map((Section: any, index: number) => <Section key={index} {...rest} />)}
    </div>
  );
});

const HomePage: React.FC = () => {
  const section = useHandleValue(0);
  const pageContainerRef = useRef<HTMLDivElement>(null);
  const backgroundImgRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<ElementType>(null);
  const bg = useImageLoad(bgHigh, bgLow); // the background image

  useEffect(() => {
    // @ts-ignore
    sectionRef.current!.style.transform = `translateX(-${section.controls.value * 100}vw)`;

    // @ts-ignore
    backgroundImgRef.current.style.width = sections.length * 100 + 'vw';
    // @ts-ignore
    backgroundImgRef.current.style.transform = `translateX(-${section.controls.value * 100}vw)`;
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

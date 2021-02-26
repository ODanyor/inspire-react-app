import React from 'react';
import styles from '../home.module.sass';

interface SectionProps {
  setSection(event: number): void;
}

const index = (WrappedComponent: React.FC<SectionProps>) => {
  return React.forwardRef((props: SectionProps, ref: any) => {
    return (
      <div className={styles.section} ref={ref}>
        <WrappedComponent {...props} />
      </div>
    );
  });
}

export default index;

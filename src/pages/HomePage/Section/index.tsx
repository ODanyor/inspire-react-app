import React, { Ref } from 'react';
import styles from '../home.module.sass';
import { SectionProps } from 'shared/interfaces';

const index = (WrappedComponent: React.FC<SectionProps>) => {
  return React.forwardRef((props: SectionProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div className={styles.section} ref={ref}>
        <WrappedComponent {...props} />
      </div>
    );
  });
}

export default index;

import React, { Ref } from 'react';
import styles from 'pages/HomePage/home.module.sass';
import { SectionProps } from 'shared/interfaces';

export default function(WrappedComponent: React.FC<SectionProps>) {
  return React.forwardRef((props: SectionProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div className={styles.section} ref={ref}>
        <WrappedComponent {...props} />
      </div>
    );
  });
}

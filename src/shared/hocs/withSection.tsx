import React, { forwardRef, Ref } from 'react';
import { SectionProps } from 'shared/interfaces';
import styles from 'pages/HomePage/home.module.sass';

export default function WithSection(WrappedComponent: React.FC<SectionProps>) {
  return forwardRef((props: SectionProps, ref: Ref<HTMLDivElement>) => (
    <div className={styles.section} ref={ref}>
      <WrappedComponent {...props} />
    </div>
  ));
}

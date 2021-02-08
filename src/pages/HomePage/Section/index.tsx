import React from 'react';
import styles from '../home.module.sass';

const index = (WrappedComponent: any) => {
  return React.forwardRef((props: any, ref: any) => {
    return (
      <div className={styles.section} ref={ref}>
        <WrappedComponent {...props} />
      </div>
    );
  });
}

export default index;

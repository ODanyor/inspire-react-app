import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './link.module.scss';

const Link: React.FC<{ to: string, children: any }> = ({ to, children }) => {
  return (
    <RouterLink className={styles.link__custom} to={to}>
      {children}
    </RouterLink>
  );
}

export default Link;

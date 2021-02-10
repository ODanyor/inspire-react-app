import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './link.module.scss';

interface LinkTypes {
  to: string;
  children: any;
  onClick?: any;
}

const Link: React.FC<LinkTypes> = ({ to, children, ...rest }) => {
  return (
    <RouterLink className={styles.link__custom} to={to} { ...rest}>
      {children}
    </RouterLink>
  );
}

export default Link;

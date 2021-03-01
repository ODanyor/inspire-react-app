import React, { ReactChild } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './styles.sass';

interface LinkTypes {
  to: string;
  children: ReactChild;
  onClick?: () => void;
}

const Link: React.FC<LinkTypes> = ({ to, children, ...rest }) => {
  return (
    <RouterLink className='link__custom' to={to} { ...rest}>
      {children}
    </RouterLink>
  );
}

export default Link;

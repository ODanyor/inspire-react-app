import React, { ReactChild } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { WithCursorPointer } from 'shared/hocs';
import './styles.sass';

interface LinkTypes {
  to: string;
  children: ReactChild;
  onClick: () => void;
}

const Link: React.FC<LinkTypes> = ({ children, ...rest }) => (
  <RouterLink className='link__custom' { ...rest}>{children}</RouterLink>
);

export default WithCursorPointer(Link);

import React, { ReactChild } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { WithCursorContext } from 'shared/hocs';
import { SUPPORTED_CURSORS } from 'shared/constants';
import { CursorContextProps } from 'shared/interfaces';
import './styles.sass';

interface LinkTypes {
  to: string;
  children: ReactChild;
  onClick?: () => void;
  cursorstate: CursorContextProps;
}

const Link: React.FC<LinkTypes> = (props) => {
  const { to, children, cursorstate, ...rest } = props;
  return (
    <RouterLink
      to={to}
      className='link__custom'
      onMouseEnter={() => cursorstate.onCursor!(SUPPORTED_CURSORS[1])}
      onMouseLeave={cursorstate.onCursor}
      { ...rest}>
      {children}
    </RouterLink>
  );
}

export default WithCursorContext(Link);

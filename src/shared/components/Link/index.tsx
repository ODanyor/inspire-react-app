import React, { ReactChild } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { WithCursorContext } from 'shared/hocs';
import { SUPPORTED_CURSORS } from 'shared/constants';
import { CursorContextProps } from 'shared/interfaces';
import './styles.sass';

interface LinkTypes {
  to: string;
  children: ReactChild;
  cursorstate: CursorContextProps;
  onClick: () => void;
}

const Link: React.FC<LinkTypes> = ({ children, cursorstate, ...rest }) => (
  <RouterLink
    className='link__custom'
    onMouseEnter={() => cursorstate.onCursor!(SUPPORTED_CURSORS[1])}
    onMouseLeave={cursorstate.onCursor}
    { ...rest}>
    {children}
  </RouterLink>
);

export default WithCursorContext(Link);

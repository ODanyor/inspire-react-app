import React, { ReactChild } from 'react';
import { CursorContextProps } from 'shared/interfaces';
import { WithCursorContext } from 'shared/hocs';
import { SUPPORTED_CURSORS } from 'shared/constants';

interface ButtonProps {
  className: string;
  children: ReactChild;
  onClick?: () => void;
  cursorstate: CursorContextProps;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const { cursorstate } = rest;

  return (
    <button
      {...rest}
      onMouseEnter={() => cursorstate.onCursor!(SUPPORTED_CURSORS[1])}
      onMouseLeave={cursorstate.onCursor}>
      {children}
    </button>
  );
}

export default WithCursorContext(Button);

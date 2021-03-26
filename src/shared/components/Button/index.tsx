import React, { ReactChild } from 'react';
import { WithCursorPointer } from 'shared/hocs';

interface ButtonProps {
  className: string;
  children: ReactChild;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button {...rest}>{children}</button>
);

export default WithCursorPointer(Button);

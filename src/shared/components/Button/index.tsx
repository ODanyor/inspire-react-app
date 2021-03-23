import React, { ReactChild } from 'react';
import { WithCursor } from 'shared/hocs';

interface ButtonProps {
  context: any;
  className: string;
  children: ReactChild;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {

  return (
    <button {...rest}>
      {children}
    </button>
  );
}

export default Button;

import React, { forwardRef, Ref } from 'react';
import { CursorProps } from 'shared/interfaces';
import './styles.sass';

const Cursor: React.FC<CursorProps> = forwardRef(({ cursor }, ref: Ref<HTMLDivElement>) => {
  console.log({ cursor });
  return <div className='cursor' ref={ref}></div>;
});

export default Cursor;

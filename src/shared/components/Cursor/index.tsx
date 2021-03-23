import React, { forwardRef, Ref } from 'react';
import { CursorProps } from 'shared/interfaces';
import { SUPPORTED_CURSORS } from 'shared/constants';
import './styles.sass';

const Cursor: React.FC<CursorProps> = forwardRef(({ cursor }, ref: Ref<HTMLDivElement>) => {
  let cursorClass = 'cursor';
  switch(cursor) {
    case SUPPORTED_CURSORS[1]:
      cursorClass = 'cursor cursor_pointer';
      break;
    default:
      cursorClass = 'cursor';
  }
      
  return <div className={cursorClass} ref={ref}></div>;
});

export default Cursor;

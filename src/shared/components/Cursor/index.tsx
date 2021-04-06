import React, { useRef, useEffect } from 'react';
import { CursorProps } from 'shared/interfaces';
import './styles.sass';

const Cursor: React.FC<CursorProps> = ({ cursor }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  let cursorClass;
  if (cursor) cursorClass = `cursor cursor_${cursor}`;
  else cursorClass = 'cursor';

  function onCursorMove(event: MouseEventInit) {
    const { clientX: x, clientY: y } = event;
    cursorRef.current!.style.transform = `translate(${x}px, ${y}px)`;
  }

  useEffect(() => {
    window.addEventListener('mousemove', onCursorMove);
    return () => window.removeEventListener('mousemove', onCursorMove);
  }, []); // eslint-disable-line

  return <div className={cursorClass} ref={cursorRef} />;
}

export default Cursor;

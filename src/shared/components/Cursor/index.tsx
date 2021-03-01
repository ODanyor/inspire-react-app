import React, { useRef, useEffect } from 'react';
import { CursorProps } from 'shared/interfaces';
import './styles.sass';

const Cursor: React.FC<CursorProps> = ({ position }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cursorRef.current!.style.transform = `translate(${position.x}px, ${position.y}px)`;
  }, [position]);

  return (
    <div className='cursor' ref={cursorRef}></div>
  );
}

export default Cursor;

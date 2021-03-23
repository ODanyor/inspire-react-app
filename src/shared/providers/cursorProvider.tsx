import React, { useEffect, useRef } from 'react';
import { useHandleValue } from 'shared/hooks';
import { Cursor } from 'shared/components';
import { CursorContext } from 'shared/utils';
import { SUPPORTED_CURSORS } from 'shared/constants';

const CursorProvider: React.FC = ({ children }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursor = useHandleValue<boolean | string>(false);

  function onMouseMove(event: MouseEventInit) {
    const { clientX: x, clientY: y } = event;
    cursorRef.current!.style.transform = `translate(${x}px, ${y}px)`;
  }

  function onCursor(cursorType: boolean | string) {
    cursorType = SUPPORTED_CURSORS.includes(cursorType) && cursorType;
    cursor.setValue(cursorType);
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []); // eslint-disable-line

  return (
    <CursorContext.Provider value={{ onCursor }}>
      <Cursor ref={cursorRef} cursor={cursor.controls.value} />
      {children}
    </CursorContext.Provider>
  );
}

export default CursorProvider;

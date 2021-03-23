import React, { useEffect } from 'react';
import { useHandleValue } from 'shared/hooks';
import { Position } from 'shared/interfaces';
import { Cursor } from 'shared/components';

export const CursorContext = React.createContext<any>('cursorContenxt');

const SUPPORTED_CORSORS = [false, 'pointer'];

const CursorProvider: React.FC = ({ children }) => {
  const mousePosition = useHandleValue<Position>({ x: 0, y: 0 });
  const cursor = useHandleValue<boolean | string>(false);

  function onMouseMove(event: MouseEventInit) {
    const { clientX: x, clientY: y } = event;
    mousePosition.setValue({ x, y });
  }

  function onCursor(cursorType: boolean | string) {
    cursorType = SUPPORTED_CORSORS.includes(cursorType) && cursorType;
    cursor.setValue(cursorType);
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []); // eslint-disable-line

  return (
    <CursorContext.Provider value={{ onCursor }}>
      <Cursor position={mousePosition.controls.value} />
      {children}
    </CursorContext.Provider>
  );
}

export default CursorProvider;

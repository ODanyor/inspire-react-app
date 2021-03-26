import React from 'react';
import { useHandleValue } from 'shared/hooks';
import { Cursor } from 'shared/components';
import { CursorContext } from 'shared/utils';
import { SUPPORTED_CURSORS } from 'shared/constants';

const CursorProvider: React.FC = ({ children }) => {
  const cursor = useHandleValue<boolean | string>(false);

  function onCursor(cursorType: boolean | string) {
    cursorType = SUPPORTED_CURSORS.includes(cursorType) && cursorType;
    cursor.setValue(cursorType);
  }

  return (
    <CursorContext.Provider value={{ onCursor }}>
      <Cursor cursor={cursor.controls.value} />
      {children}
    </CursorContext.Provider>
  );
}

export default CursorProvider;

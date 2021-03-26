import React from 'react';
import { CursorContext } from 'shared/utils';
import { SUPPORTED_CURSORS } from 'shared/constants';
import { CursorContextProps } from 'shared/interfaces';

export default function WithCursorHover(WrappedComponent: React.FC<any>) {
  return (props: any) => (
    <CursorContext.Consumer>
      {(value: CursorContextProps) => {
        const cursorToAuto = () => value.onCursor!(false);
        const cursorToPointer = () => value.onCursor!(SUPPORTED_CURSORS[1]);
        const cursorToActive = () => value.onCursor!(SUPPORTED_CURSORS[2]);

        return (
          <WrappedComponent
            {...props}
            onMouseEnter={cursorToPointer}
            onMouseLeave={cursorToAuto}
            onMouseDown={cursorToActive} />
        );
      }}
    </CursorContext.Consumer>
  );
}

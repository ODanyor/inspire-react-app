import React from 'react';
import { CursorContext } from 'shared/utils';

export default function WithCursorContext(WrappedComponent: React.FC<any>) {
  return (props: any) => (
    <CursorContext.Consumer>
      {value => <WrappedComponent {...props} cursorstate={value} />}
    </CursorContext.Consumer>
  );
}

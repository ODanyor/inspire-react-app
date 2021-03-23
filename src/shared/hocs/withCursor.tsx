import React from 'react';
import { CursorContext } from 'shared/providers/cursorProvider';

export default function(Component: React.FC<any>) {
  return function(props: any) {
    return (
      <CursorContext.Consumer>
        {value => <Component {...props} context={value} />}
      </CursorContext.Consumer>
    );
  }
}

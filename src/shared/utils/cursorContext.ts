import { createContext } from 'react';
import { CursorContextProps } from 'shared/interfaces';

// NOTE: never use "useContext" for this CursorContext object, use "Consumer" instead!
export default createContext<CursorContextProps>({});

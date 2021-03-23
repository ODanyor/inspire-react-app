import { createContext } from 'react';

interface CursorContextProps {};

// NOTE: never use "useContext" for this CursorContext object, use "Consumer" instead!
// TODO: context should be provided by interface
export default createContext<CursorContextProps>({});

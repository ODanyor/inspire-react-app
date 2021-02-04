import { useState } from 'react';

const useHandleValue = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  function onChange (event: typeof initialValue) {
    setValue(event);
  }

  return { controls: { value, onChange }, setValue };
}

export default useHandleValue;

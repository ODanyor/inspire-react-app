import { useState } from 'react';
import { HandleProps } from 'shared/interfaces';

const useHandleValue = <T>(initialValue: T): HandleProps<T> => {
  const [value, setValue] = useState<typeof initialValue>(initialValue);
  function onChange (event: any) {
    setValue(event.target.value);
  }

  return { controls: { value, onChange }, setValue };
}

export default useHandleValue;

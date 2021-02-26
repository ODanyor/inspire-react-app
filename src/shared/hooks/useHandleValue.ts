import { useState } from 'react';

interface HandleProps<T> {
  controls: {
    value: T;
    onChange: (event: T) => void;
  };
  setValue: React.Dispatch<T>;
}

const useHandleValue = <T>(initialValue: T): HandleProps<T> => {
  const [value, setValue] = useState<T>(initialValue);
  function onChange (event: T) {
    setValue(event);
  }

  return { controls: { value, onChange }, setValue };
}

export default useHandleValue;

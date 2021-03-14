import { ChangeEvent, useState } from 'react';

interface HandleProps<T> {
  controls: {
    value: T;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  };
  setValue: React.Dispatch<T>;
}

const useHandleValue = <T>(initialValue: T): HandleProps<T> => {
  const [value, setValue] = useState<typeof initialValue>(initialValue);
  function onChange (event: any) {
    setValue(event.target.value);
  }

  return { controls: { value, onChange }, setValue };
}

export default useHandleValue;

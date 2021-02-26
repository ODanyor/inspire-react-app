import { useEffect } from 'react';
import { useHandleValue } from 'shared/hooks';

// @ts-ignore
const useImageLoad = (src: any, placeholder: any) => {
  const loading = useHandleValue(true);
  const current = useHandleValue(placeholder);

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      loading.setValue(false);
      current.setValue(src);
    }
  }, [src]); // eslint-disable-line

  return { loading: loading.controls.value, current: current.controls.value };
}

export default useImageLoad;

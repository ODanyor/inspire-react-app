import { useEffect } from 'react';
import { useHandleValue } from 'shared/hooks';

interface ImageLoadProps {
  loading: boolean;
  current: string;
}

const useImageLoad = (src: string, placeholder: string): ImageLoadProps => {
  const loading = useHandleValue<boolean>(true);
  const current = useHandleValue<string>(placeholder);

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

import { useState, useEffect } from 'react';

// @ts-ignore
const useImageLoad = (src: any, placeholder: any) => {
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(placeholder);

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      setLoading(false);
      setCurrent(src);
    }
  }, [src]);

  return {loading, current};
}

export default useImageLoad;

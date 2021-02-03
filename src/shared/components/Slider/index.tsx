import React from 'react';
import styles from './slider.module.scss';

const Slider: React.FC<{slides: number, current: number}> = ({ slides, current }) => {
  console.log({ slides, current });

  return (
    <div className='slider'>
      <div className='slider__map'>
        <div className="slider__map-stick"></div>
        <div className="slider__map-dot"></div>
        <div className="slider__map-stick"></div>
      </div>
      <div className='slider__queue'></div>
    </div>
  );
}

export default Slider;

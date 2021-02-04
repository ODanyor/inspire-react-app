import React from 'react';
import './styles.scss';

interface SliderTypes {
  slides: number;
  current: number;
  setSection: any;
}

const Slider: React.FC<SliderTypes> = ({ slides, current, setSection }) => {
  function renderPoints () {
    const points = [];
    for (let i = 0; i < slides; i++) {
      const point_class = i === current ? 'slider__point slider__point-active' : 'slider__point';
      points.push(<button key={'point_' + i} className={point_class} onClick={() => setSection(i)} />);
    }

    return points;
  }

  function renderSwitchers () {
    const switchers = [];
    while (slides--) switchers.push(<div className='slider__queue'>{slides + 1}</div>);

    return switchers;
  }

  return (
    <div className='slider'>
      <div className='slider__map'>
        <div className='slider__stick'></div>
        {renderPoints()}
        <div className='slider__stick'></div>
      </div>
      <div className="slider__queues">
        <div
          className="slider__queues__switcher"
          style={{ transform: `translateY(-${(slides - (current + 1)) * 48}px)` }}>
          {renderSwitchers()}
        </div>
      </div>
    </div>
  );
}

export default Slider;

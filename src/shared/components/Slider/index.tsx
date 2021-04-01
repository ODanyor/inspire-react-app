import React from 'react';
import { Button } from 'shared/components';
import { SectionProps } from 'shared/interfaces';
import './styles.sass';

interface SliderProps extends SectionProps {
  slides: number;
  current: number;
}

interface PointButtonProps {
  className: string;
  onClick: () => void;
}

const PointButton: React.FC<PointButtonProps> = (props) => <Button {...props}><div /></Button>;

const Slider: React.FC<SliderProps> = ({ slides, current, setSection }) => {
  function renderPoints() {
    const points = [];
    for (let i = 0; i < slides; i++) {
      const point_class = i === current ? 'slider__point slider__point_active' : 'slider__point';
      points.push(<PointButton key={'point_' + i} className={point_class} onClick={() => setSection(i)} />);
    }

    return points;
  }

  function renderSwitchers() {
    const switchers = [];
    while (slides--) {
      const index = slides + 1;
      switchers.push(<div key={'slide_' + index} className='slider__queue'>{index}</div>);
    }

    return switchers;
  }

  return (
    <div className='slider'>
      <div className='slider__map'>
        <div className='slider__stick'></div>
        {renderPoints()}
        <div className='slider__stick'></div>
      </div>
      <div className='slider__queues'>
        <div
          className='slider__queues-switcher'
          // TODO: translate value '48' should be dynamic
          style={{ transform: `translateY(-${(slides - (current + 1)) * 48}px)` }}>
          {renderSwitchers()}
        </div>
      </div>
    </div>
  );
}

export default Slider;

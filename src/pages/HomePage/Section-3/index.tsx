import React from 'react';
import Section from '../Section';

import './styles.sass';
import wave from 'shared/assets/wave.svg';

const Section3: React.FC = () => {
  return (
    <div className='cta'>
      <div className='cta__header'>
        <div className="cta__header__title">SO</div>
      </div>
      <div className='cta__body'>
        <div className="cta__body__part">
          <div className="cta__body__title">WHAT</div>
          <div className="cta__body__title">DO</div>
        </div>
        <img alt='wave' src={wave} width='100%' height='auto' />
        <div className="cta__body__part">
          <div className="cta__body__title">YOU</div>
          <div className="cta__body__title">THINK</div>
        </div>
      </div>
    </div>
  );
}

export default Section(Section3);

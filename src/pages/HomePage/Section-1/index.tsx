import React from 'react';
import Section from '../Section';
import './styles.sass';

interface Section1Props {
  setSection(event: number): void;
}

const Section1: React.FC<Section1Props> = ({ setSection }) => {
  return (
    <React.Fragment>
      <div className='head'>
        <div className="head__title">
          <div>Discover</div>
          <div>Explore horizonts</div>
        </div>
        <button className='head__button' onClick={() => setSection(1)}>Take a tour now &#8594;</button>
      </div>
    </React.Fragment>
  );
}

export default Section(Section1);

import React from 'react';
import Section from '../Section';

import './styles.sass';

const Section1: React.FC<{ setSection: any}> = ({ setSection }) => {
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

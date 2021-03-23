import React from 'react';
import { WithSection } from 'shared/hocs';
import { SectionProps } from 'shared/interfaces';
import './styles.sass';

const Section1: React.FC<SectionProps> = ({ setSection }) => {
  return (
    <div className='head'>
      <div className="head__title">
        <div>Discover</div>
        <div>Explore horizonts</div>
      </div>
      <button className='head__button' onClick={() => setSection(1)}>Take a tour now &#8594;</button>
    </div>
  );
}

export default WithSection(Section1);

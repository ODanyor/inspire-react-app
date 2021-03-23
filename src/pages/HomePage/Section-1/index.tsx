import React from 'react';
import { WithSection } from 'shared/hocs';
import { SectionProps } from 'shared/interfaces';
import { Button } from 'shared/components';
import './styles.sass';

const Section1: React.FC<SectionProps> = ({ setSection }) => {
  return (
    <div className='head'>
      <div className="head__title">
        <div>Discover</div>
        <div>Explore horizonts</div>
      </div>
      <Button className='head__button' onClick={() => setSection(1)}>Take a tour now &#8594;</Button>
    </div>
  );
}

export default WithSection(Section1);

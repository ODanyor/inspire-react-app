import React, { useRef, useEffect } from 'react';
import { WithSection } from 'shared/hocs';
import { SectionProps } from 'shared/interfaces';
import { Button } from 'shared/components';
import { useHandleValue } from 'shared/hooks';
import './styles.sass';

const Section1: React.FC<SectionProps> = ({ setSection }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const button = useHandleValue<null | React.FC>(null);

  useEffect(() => {
    titleRef.current!.onanimationend = () => {
      button.setValue(() => <Button className='head__button' onClick={() => setSection(1)}>Take a tour now &#8594;</Button>);
    }
  }, []); // eslint-disable-line

  return (
    <div className='head'>
      <div className='head__title'>
        <div>Discover</div>
        <div ref={titleRef}>Explore horizonts</div>
      </div>
      {button.controls.value}
    </div>
  );
}


export default WithSection(Section1);

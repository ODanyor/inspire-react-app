import React from 'react';
import { Button } from 'shared/components';
import { HandleProps } from 'shared/interfaces';
import './styles.sass';

interface HamburgerProps {
  isActive: HandleProps<boolean>;
}

const Hamburger: React.FC<HamburgerProps> = ({ isActive }) => {
  const stick_class = `hamburger__stick${isActive.controls.value ? '_open' : ''}`;

  function onMenuToggle() {
    isActive.setValue(!isActive.controls.value);
  }

  return (
    <Button className='hamburger' onClick={onMenuToggle}>
      <div className={stick_class}></div>
      <div className={stick_class}></div>
    </Button>
  );
}

export default Hamburger;

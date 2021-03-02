import React, { useEffect } from 'react';
import { useHandleValue } from 'shared/hooks';

import { Link, Menu, Cursor } from 'shared/components';
import { Position } from 'shared/interfaces';

import './styles.sass';
import logo from 'shared/assets/logo.svg';

const WithInterface: React.FC = ({ children }) => {
  const menuIsOpen = useHandleValue<boolean>(false);
  const cursorPosition = useHandleValue<Position>({ x: 0, y: 0 });

  function menuToggle() {
    menuIsOpen.setValue(!menuIsOpen.controls.value);
  }

  function onClose() {
    menuIsOpen.setValue(false);
  }
  
  function onMouseMove(event: MouseEventInit) {
    const { clientX: x, clientY: y } = event;
    cursorPosition.setValue({ x, y });
  }
  
  const stick_class = `interface__button__stick${menuIsOpen.controls.value ? '_open' : ''}`;
  
  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []); // eslint-disable-line

  return (
    <React.Fragment>
      <Cursor position={cursorPosition.controls.value} />
      <Menu isOpen={menuIsOpen.controls.value} onClose={onClose} />

      <div className='interface interface__header'>
        <Link to='/'>
          <img alt='logo' src={logo} height='25px' />
        </Link>
        <div className='flex'>
          <button className='interface__button' onClick={menuToggle}>
            <div className={stick_class}></div>
            <div className={stick_class}></div>
          </button>
        </div>
      </div>

      {children}

      <div className='interface interface__footer'>
        <span>© 2021 by doniyor-git.web.app</span>
      </div>
    </React.Fragment>
  );
}

export default WithInterface;

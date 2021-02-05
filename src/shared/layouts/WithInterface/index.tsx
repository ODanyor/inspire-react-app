import React from 'react';
import { useHandleValue } from 'shared/hooks';

import { Link } from 'shared/components';

import './styles.sass';
import logo from 'shared/assets/logo.svg';

const WithInterface: React.FC = ({ children }) => {
  const menuIsOpen = useHandleValue(false);

  function menuToggle () {
    menuIsOpen.setValue(!menuIsOpen.controls.value);
  }

  return (
    <React.Fragment>
      <div className='interface interface__header'>
        <Link to='/'>
          <img alt='logo' src={logo} height='25px' />
        </Link>
        
        <div className='flex'>
          <button className='interface__button' onClick={menuToggle}>
            <div className={`interface__button__stick${menuIsOpen.controls.value ? '_open' : ''}`}></div>
            <div className={`interface__button__stick${menuIsOpen.controls.value ? '_open' : ''}`}></div>
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

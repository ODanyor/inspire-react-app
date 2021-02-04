import React from 'react';
import { useHandleValue } from 'shared/hooks';

import { Link, Menu } from 'shared/components';

import './styles.scss';
import logo from 'shared/assets/logo.svg';

const WithInterface: React.FC = ({ children }) => {
  const menuIsOpen = useHandleValue(false);

  function menuToggle () {
    menuIsOpen.setValue(!menuIsOpen.controls.value);
  }

  return (
    <React.Fragment>
      <div className='interface__section interface__header flex-beetwen'>
        <Link to='/'>
          <img alt='logo' src={logo} height='25px' />
        </Link>
        <div className='flex'>
          <button
            className='interface__item interface__burger-button'
            onClick={menuToggle}>
            <div className='interface__burger-button__stick'></div>
            <div className='interface__burger-button__stick'></div>
          </button>
        </div>
      </div>

      {children}

      <div className='interface__section interface__footer flex-beetwen'>
        <span>© 2021 by doniyor-git.web.app</span>
      </div>
    </React.Fragment>
  );
}

export default WithInterface;

import React from 'react';
import { useHandleValue } from 'shared/hooks';
import { CursorProvider } from 'shared/providers';
import { Link, Menu, Hamburger } from 'shared/components';

import logo from 'shared/assets/logo.svg';
import './styles.sass';

const WithInterface: React.FC = ({ children }) => {
  const menuIsOpen = useHandleValue<boolean>(false);

  function onClose() {
    menuIsOpen.setValue(false);
  }

  return (
    <CursorProvider>
      <Menu isOpen={menuIsOpen.controls.value} onClick={onClose} />
      <div className='interface interface__header'>
        <Link to='/'>
          <img alt='logo' src={logo} height='25px' />
        </Link>
        <div className='flex'>
          <Hamburger isActive={menuIsOpen} />
        </div>
      </div>
      {children}
      <div className='interface interface__footer'>
        <span>© 2021 by doniyor-git.web.app</span>
      </div>
    </CursorProvider>
  );
}

export default WithInterface;

import React from 'react';
import { useHandleValue } from 'shared/hooks';

import { CursorProvider } from 'shared/providers';
import { Link, Menu } from 'shared/components';

import './styles.sass';
import logo from 'shared/assets/logo.svg';

const WithInterface: React.FC = ({ children }) => {
  const menuIsOpen = useHandleValue<boolean>(false);

  function onMenuToggle() {
    menuIsOpen.setValue(!menuIsOpen.controls.value);
  }

  function closeMenu() {
    menuIsOpen.setValue(false);
  }
  
  const stick_class = `interface__button__stick${menuIsOpen.controls.value ? '_open' : ''}`;

  return (
<<<<<<< HEAD:src/shared/layouts/Main/index.tsx
    <CursorProvider>
      <Menu isOpen={menuIsOpen.controls.value} onClose={onClose} />
=======
    <React.Fragment>
      <Cursor position={cursorPosition.controls.value} />
      <Menu isOpen={menuIsOpen.controls.value} onClose={closeMenu} />
>>>>>>> d00cee805689a290ee2f36813e017bd0b68b6d68:src/shared/layouts/WithInterface/index.tsx

      <div className='interface interface__header'>
        <Link to='/'>
          <img alt='logo' src={logo} height='25px' />
        </Link>
        <div className='flex'>
          <button className='interface__button' onClick={onMenuToggle}>
            <div className={stick_class}></div>
            <div className={stick_class}></div>
          </button>
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

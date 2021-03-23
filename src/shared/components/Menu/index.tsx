import React from 'react';
import { Link } from 'shared/components';
import { menuItems } from 'shared/assets/context';
import { MenuProps, MenuLinkProps } from 'shared/interfaces';
import './styles.sass';

const MenuLink: React.FC<MenuLinkProps> = ({ placeholder, ...rest }) => (
  <Link {...rest}><li className='menu__link'>{placeholder}</li></Link>
);

const Menu: React.FC<MenuProps> = ({ isOpen, ...rest }) => (
  <div className={isOpen ? 'menu menu_open' : 'menu'}>
    <ul className='menu__list'>
      {menuItems.map((item, index) => <MenuLink key={index} {...item} {...rest} />)}
    </ul>
  </div>
);

export default Menu;

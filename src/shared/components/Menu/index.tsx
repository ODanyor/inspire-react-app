import React from 'react';
import { Link } from 'shared/components';
import './styles.sass';

const menu_items = [
  { to: '/', placeholder: 'Home' },
  { to: '/about', placeholder: 'About' },
  { to: '/contact', placeholder: 'Contact' },
];

interface MenuLinkTypes {
  to: string;
  placeholder: string;
  close: any;
}

const MenuLink: React.FC<MenuLinkTypes> = ({ to, placeholder, close }) => {
  return <Link to={to}  onClick={close}><li className='menu__link'>{placeholder}</li></Link>;
}

interface MenuTypes {
  isOpen: boolean;
  close: any;
}

const Menu: React.FC<MenuTypes> = ({ isOpen, ...rest }) => {
  return (
    <div className={isOpen ? 'menu menu_open' : 'menu'}>
      <ul className='menu__list'>
        {menu_items.map((item, index) => <MenuLink key={index} {...item} {...rest} />)}
      </ul>
    </div>
  );
}

export default Menu;

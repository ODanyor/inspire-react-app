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
}

const MenuLink: React.FC<MenuLinkTypes> = ({ to, placeholder }) => {
  return (
    <Link to={to}>
      <li className='menu__link'>
        {placeholder}
        <div className='menu__link__bg' />
      </li>
    </Link>
  );
}

interface MenuTypes {
  isOpen: boolean;
}

const Menu: React.FC<MenuTypes> = ({ isOpen }) => {
  return (
    <div className={isOpen ? 'menu menu_open' : 'menu'}>
      <ul className='menu__list'>
        {menu_items.map((item, index) => <MenuLink key={index} {...item} />)}
      </ul>
    </div>
  );
}

export default Menu;

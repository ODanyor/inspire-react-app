import React from 'react';
import { Link } from 'shared/components';
import { menu_items } from 'shared/assets/context';
import { MenuProps, MenuLinkProps } from 'shared/interfaces';
import './styles.sass';

const MenuLink: React.FC<MenuLinkProps> = ({ to, placeholder, onClose }) => {
  return <Link to={to}  onClick={onClose}><li className='menu__link'>{placeholder}</li></Link>;
}

const Menu: React.FC<MenuProps> = ({ isOpen, ...rest }) => {
  return (
    <div className={isOpen ? 'menu menu_open' : 'menu'}>
      <ul className='menu__list'>
        {menu_items.map((item, index) => <MenuLink key={index} {...item} {...rest} />)}
      </ul>
    </div>
  );
}

export default Menu;

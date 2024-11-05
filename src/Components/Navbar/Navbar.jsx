
import React, { useState, useRef} from 'react';
import './Navbar.css';
import logo from '../../assets/logo-icon.png';
import menu_open from '../../assets/menu-open.png';
import menu_close from '../../assets/menu-close.png';


const Navbar = () => {

  const [menu, setMenu] = useState('home');

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right='0';
  };

  const closeMenu = () => {
    menuRef.current.style.right='-350px';
  };



  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div id='nav' className='navbar'>
      <img id='my-logo-home' src={logo} alt="personal logo" />
      <img src={menu_open}  onClick={openMenu} alt='menu toggle icon' className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt='closing x icon' className='nav-mob-close'/>
        <li onClick={() => handleMenuClick('home')}>
          <a className='nav-link-anchor' href='#nav'><p className={menu === 'home' ? 'underlined' : ''}>Home</p></a>
        </li>
        <li onClick={() => handleMenuClick('about')}>
          <a className='nav-link-anchor' href='#about'><p className={menu === 'about' ? 'underlined' : ''}>About Me</p></a>
        </li>
        <li onClick={() => handleMenuClick('skills')}>
          <a className='nav-link-anchor' href='#skills'><p className={menu === 'skills' ? 'underlined' : ''}>Technical Skills</p></a>
        </li>
        <li onClick={() => handleMenuClick('projects')}>
          <a className='nav-link-anchor' href='#projects'><p className={menu === 'projects' ? 'underlined' : ''}>Projects</p></a>
        </li>
        <li onClick={() => handleMenuClick('contact')}>
          <a className='nav-link-anchor' href='#contact'><p className={menu === 'contact' ? 'underlined' : ''}>Contact</p></a>
        </li>
      </ul>
      <div className='nav-connect'><a className='nav-link-anchor' href='#contact'>Connect With Me</a></div>
    </div>
  );
};

export default Navbar
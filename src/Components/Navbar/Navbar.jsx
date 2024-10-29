
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo-icon.png';


const Navbar = () => {

  const [menu, setMenu] = useState('home');

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div id='nav' className='navbar'>
      <img id='my-logo-home' src={logo} alt="personal logo" />
      <ul className='nav-menu'>
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
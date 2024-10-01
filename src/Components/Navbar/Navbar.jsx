import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo-icon.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img id='my-logo-home' src={logo} alt="personal logo" />
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Technical Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <div className='nav-connect'>Connect With Me</div>
    </div>
  )
}

export default Navbar
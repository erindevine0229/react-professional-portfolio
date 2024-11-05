import React from 'react';
import './Footer.css';
import logo from '../../assets/logo-icon.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div id='footer' className='footer-left'>
            <p>Created and Maintained By: Erin DeVine</p>
        </div>

        <div className='footer-right'>
            <img src={logo}></img>
        </div>
    </div>
  )
}

export default Footer
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div id='footer' className='footer-left'>
            <p>Created and Maintained By: Erin DeVine</p>
        </div>

        <div className='footer-right'>
            <img src='../../src/assets/logo-icon.png'></img>
        </div>
    </div>
  )
}

export default Footer
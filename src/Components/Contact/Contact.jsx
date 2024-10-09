import React from 'react';
import './Contact.css';
import emailIcon from '../../assets/email-icon.avif';
import phoneIcon from '../../assets/phone-icon.jpg';
import linkedInIcon from '../../assets/linkedin-icon.png';
import githubIcon from '../../assets/github-icon.png';
import locationIcon from '../../assets/location-icon.jpg';

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-title'>
            <h1>Get in Touch!</h1>
        </div>
        <div className='contact-section-container'>
            <div className='contact-left'>
                <h2>I'd love to hear from you!</h2>
                <p>I am always eager to hear about new employment opportunities or to connect with other developers wanting to collaborate.</p>
            </div>
            <div className='contact-right'>
                <div className='contact-details'>
                    <img src={emailIcon}></img>
                </div>
                <div className='contact-details'>
                    <img src={phoneIcon}></img>
                </div>
                <div className='contact-details'>
                    <img src={linkedInIcon}></img>
                </div>
                <div className='contact-details'>
                    <img src={githubIcon}></img>
                </div>
                <div className='contact-details'>
                    <img src={locationIcon}></img>
                </div>
                

                

                

            </div>
        </div>

    </div>
  )
}

export default Contact
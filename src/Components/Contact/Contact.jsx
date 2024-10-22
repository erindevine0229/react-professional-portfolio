import React from 'react';
import './Contact.css';
import emailIcon from '../../assets/email-icon.png';
import phoneIcon from '../../assets/phone-icon.png';
import linkedInIcon from '../../assets/linkedin-icon.png';
import githubIcon from '../../assets/github-icon.png';
import locationIcon from '../../assets/location-icon.png';

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-title'>
            <h1>Get in Touch</h1>
        </div>
        <div className='contact-section-container'>
            <div className='contact-left'>
                <h2>I'd love to hear from you!</h2>
                <p>I am always eager to hear about new employment opportunities or to connect with other developers wanting to collaborate.</p>
                <div className='contact-details'>
                    <img src={emailIcon}></img>
                    <p>erinj291@gmail.com</p>
                </div>
                <div className='contact-details'>
                    <img src={phoneIcon}></img>
                    <p>774.217.0756</p>
                </div>
                <div className='contact-details'>
                    <img src={linkedInIcon}></img>
                    <p>linkedin.com/in/erin-devine-rdn/</p>
                </div>
                <div className='contact-details'>
                    <img src={githubIcon}></img>
                    <p>github.com/erindevine0229</p>
                </div>
                <div className='contact-details'>
                    <img src={locationIcon}></img>
                    <p>Richmond, VA</p>
                </div>
            </div>

            <form className='contact-right'>
                <label>Your Name:</label>
                <input type='text' placeholder='Enter your name here' name='name'></input>
                <label>Your Email:</label>
                <input type='email' placeholder='Enter your email here' name='email'></input>
                <label>What would you like the say?</label>
                <textarea name='message' rows='8' placeholder='Enter your message or question.'></textarea>
                <button type='submit' className='contact-submit'>Submit!</button>

            </form>
        </div>

    </div>
  )
}

export default Contact
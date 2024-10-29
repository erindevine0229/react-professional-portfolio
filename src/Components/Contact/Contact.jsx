import React from 'react';
import './Contact.css';
import emailIcon from '../../assets/email-icon.png';
import phoneIcon from '../../assets/phone-icon.png';
import linkedInIcon from '../../assets/linkedin-icon.png';
import githubIcon from '../../assets/github-icon.png';
import locationIcon from '../../assets/location-icon.png';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b3d2b535-70aa-4965-a12e-3dd39287fd34");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Get in Touch</h1>
            </div>
            <div className='contact-section-container'>
                <div className='contact-left'>
                    <h2>I'd love to hear from you!</h2>
                    <p>I am always eager to hear about new employment opportunities or to connect with other developers wanting to collaborate.</p>
                    <div className='contact-details'>
                        <img src={emailIcon} alt="Email" />
                        <p>erinj291@gmail.com</p>
                    </div>
                    <div className='contact-details'>
                        <img src={phoneIcon} alt="Phone" />
                        <p>774.217.0756</p>
                    </div>
                    <div className='contact-details'>
                        <img src={linkedInIcon} alt="LinkedIn" />
                        <p>linkedin.com/in/erin-devine-rdn/</p>
                    </div>
                    <div className='contact-details'>
                        <img src={githubIcon} alt="GitHub" />
                        <p>github.com/erindevine0229</p>
                    </div>
                    <div className='contact-details'>
                        <img src={locationIcon} alt="Location" />
                        <p>Richmond, VA</p>
                    </div>
                </div>

                <form onSubmit={onSubmit} className='contact-right'>
                    <label>Your Name:</label>
                    <input type='text' placeholder='Enter your name here' name='name' />
                    <label>Your Email:</label>
                    <input type='email' placeholder='Enter your email here' name='email' />
                    <label>What would you like to say?</label>
                    <textarea name='message' rows='8' placeholder='Enter your message or question.'></textarea>
                    <button type='submit' className='contact-submit'>Submit!</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}

export default Contact;
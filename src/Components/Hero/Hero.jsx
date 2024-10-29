import React from 'react';
import './Hero.css';
import profile from '../../assets/profile-pic.jpg';

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img id='hero-profile' src={profile} alt="profile image of developer" />
        <h1><span id='title-fancy'>I'm Erin DeVine,</span> full stack developer based in Richmond, VA.</h1>
        <p>I'm a graduate of the Full Stack Web Development Bootcamp through University of Richmond. I have experience working on a variety of both personal and collaborative projects using up to date tech stacks. I am excited to continue on my journey as a junior developer and look forward to learning in a team environment.</p>
        <div className='hero-action-btns'>
            <div className='hero-contact'><a className='nav-link-anchor' href='#contact'>Contact Me</a></div>
            <div className='hero-resume'><a id='resume-link-anchor' target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1cntz9Jm6LTSXHyYOVat04szpVWQHHfDw/edit?usp=sharing&ouid=103889415984039439758&rtpof=true&sd=true">My Resume</a></div>


        </div>
    </div>
  )
}

export default Hero
import React from 'react';
import './About.css';
import aboutImg from '../../assets/about-bg.jpg';

const About = () => {
  return (
    <div className='about'>
      <div className='about-header'>
        <h1>About Me</h1>
        <img src={aboutImg} alt='purple background graphics'></img>
      </div>
      <div className='about-section'>
        <div className='about-pg'>
            <p>My name is Erin! I moved from Boston, MA to Richmond, VA 3 years ago, where I live with my husband and my crazy dog Auggie.  I am a career changer coming from clinical dietetics, where I work to optimize nutrition for preterm infants. My background in healthcare offers me a unique perspective on customer service, attention to detail and problem solving. I am experienced working on teams both within my profession and interdisciplinarily. I am also familar with both in-person and virtual workflows.</p>
            <p>I decided to pursue this new career in web development because I love using creativity to solve challenges and constantly learning new skills. Web development interests me because of it's ability to use technical skills and innovation to solve real world problems. I have experience working with a wide variety of languages and frameworks. Following completion of my full stack program, I have continued to practice my skills through independent projects. I'm open to both on-site and remote opportunities. Check out some of my work below!</p>
        </div>
        <div className='about-skills'>
            <ul className='skills-list'>
                <li id='skill-a'>Front End</li>
                <li id='skill-b'>Back End</li>
                <li id='skill-c'>RESTful APIs</li>
                <li id='skill-d'>MVC Framework</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
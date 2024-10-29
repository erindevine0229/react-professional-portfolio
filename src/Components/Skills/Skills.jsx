import React from 'react';
import './Skills.css';

const techs = [
  'HTML', 'CSS', 'PostgreSQL/Sequelize', 'Javascript', 'React.js', 'Handlebars', 'Express.js','GraphQL/Apollo', 'SQL', 'GitHub', 'Insomnia', 'Node.js', 'MongoDB/mongoose', 'Bootstrap', 'REST API'
];

const Skills = () => {
  return (
    <div id='skills' className='tech'>
      <h1>I Have experience working with:</h1>
      <div className='tech-container'>
        <ul className='tech-list'>
          {techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Skills
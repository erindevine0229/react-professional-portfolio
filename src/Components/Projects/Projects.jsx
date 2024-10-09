import React from 'react';
import './Projects.css';
import myProjectsData from '../../assets/myProjects';

const Projects = () => {
  return (
    <div className='projects'>
      <div className='project-title'>
        <h1>Click below to see some of my latest projects:</h1>
      </div>
      <div className='projects-container'>
        {myProjectsData.map((project, index) => (
          <article key={index} className='project'>
            <h2>{project.name}</h2>
            <img src={project.image} alt={`Example image of ${project.name}`} />
          </article>
        ))}
      </div>
      <div className='show-more'>
        <a href='https://github.com/erindevine0229?tab=repositories' target='_blank' rel='noopener noreferrer'>See All My Projects →</a>
      </div>
    </div>
  );
}

export default Projects;
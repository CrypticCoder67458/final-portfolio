import React from 'react'
import { projects } from '../../../public/assets/projects'
import { Project } from './Project'
export const Projects = ({isEnglish}) => {
  return (
    <div>
      <div className='projects-section-title' id='projects'>
        <h2>{isEnglish?'My Portfolio':'Mein Portfolio'}</h2>
        <p>{isEnglish?'most recent projects':'Meine neuesten Projekte'}</p>
      </div>
      <div className='projects-container'>
        {projects.map((project)=><Project project={project}
        key={project.number} />)}
      </div>

    
      
    </div>
  )
}

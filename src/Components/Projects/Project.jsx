import {useState} from 'react'
import './projects.css'
import '../../Styles/App.css'
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

export const Project = ({project,isEnglish}) => {
  const[isHover, setIsHover] = useState(false)
  const getIcon = (tech) => {
    switch (tech) {
      case 'Javascript':
        return <DiJavascript size={50} />
      case 'React':
        return <FaReact size={42} />
      case 'Python':
        return <FaPython  size={43}/>
      default:
        return null
    }
  }
  return (
    <div className='project' 
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}>
        <img src={project.img} className='image-container' />
        {isHover && <div className='overlay'></div> }
        {project.isWorking ? null:<div className='not-working'>Currently Not Working</div>}
        <div className={isHover?'button-container': 'invisible'}>
          <a href={project.codeUrl}><button>Source code</button></a>
          <a href={project.demoUrl}><button>Live demo</button></a>
        </div>
        
        
        <div className='project-info'>
          <div className='project-info-title-tech'>
            <h1>{project.title}</h1>
            <div>{getIcon(project.tech)}</div>
          </div>
            <p>{isEnglish?project.descriptionEN:project.descriptionDE}</p>
        </div>

    </div>
  )
}

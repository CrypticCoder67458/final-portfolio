import React from 'react'
import './skills.css'
import '../../Styles/App.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";


export const Skills = ({isEnglish}) => {
  return (
    <div className='skills'id='skills' >
        <h1>{isEnglish ? 'Technical Skills' : 'Fähigkeiten'}:</h1>
        
        <div className='skills-container'>
            <FaHtml5 color='white' size={50} className='zoom-effect logo'/>
            <FaCss3Alt color='white' size={50} className='zoom-effect logo'/>
            <DiJavascript color='white' size={54} className='zoom-effect logo'/>
            <FaReact color='white' size={50} className='zoom-effect logo'/>
            <FaGithub color='white' size={50} className='zoom-effect logo'/>
            <FaGitAlt color='white' size={50} className='zoom-effect logo'/>
            <FaPython color='white' size={50}  className='zoom-effect logo'/>
            <FaJava color='white ' size={50} className='zoom-effect logo'/>

            {/*<img src='../../../public/Logos/html5-logo-10.png' className='logo dark-white-effect'/>
            <img src='../../../public/Logos/css-logo.png' className='logo css dark-white-effect'/>
            <img src='../../../public/Logos/javascript-logo-big.png' className='logo dark-white-effect'/>
            <img src='../../../public/assets/react.svg' className='logo dark-white-effect'/>
            <img src='../../../public/Logos/node-js.png' className='logo dark-white-effect'/>
            <img src='../../../public/Logos/Github-Logo-PNG-4091917246.png' className='logo github dark-white-effect'/>
            <img src='../../../public/Logos/python-logo-452175197.png' className='logo dark-white-effect'/>
            <img src='../../../public/Logos/java-logo-1-574885533.png' className='logo java dark-white-effect'/>
            
            */}
        </div>
    </div>
  )
}

import React from 'react'
import './about-me.css'
import '../../Styles/App.css'

import heroImg from '../../../public/assets/Designer.png'
import { FaGithub, FaFileDownload, FaEye } from "react-icons/fa";
export const AboutMe = ({isEnglish}) => {
  const english = {
    firstP: 'Hello, I\'m',
    secondP: 'Frontend Web Developer',
    thirdP: 'I am currently studying Informatics at TU Darmstadt and seeking a part-time position as a Frontend Web Developer. I have a solid foundation in HTML, CSS, and JavaScript, along with experience in frameworks like React. In addition to my academic studies, I have participated in various bootcamps to enhance my skills and regularly code in my free time to stay up-to-date with the latest technologies. I am eager to apply my knowledge and passion for web development in a dynamic company environment.',
    seeGrades: 'See my grades',
    downloadCV: 'Download CV'
  }
  const german = {
    firstP: 'Hallo, ich bin',
    secondP: 'Frontend Web Entwickler',
    thirdP: 'Ich studiere derzeit Informatik an der TU Darmstadt und suche eine Teilzeitstelle als Frontend Web Entwickler. Ich habe eine solide Basis in HTML, CSS und JavaScript, sowie Erfahrungen in Frameworks wie React. Neben meinem akademischen Studium habe ich an verschiedenen Bootcamps teilgenommen, um meine Fähigkeiten zu verbessern und code regelmäßig in meiner Freizeit, um auf dem neuesten Stand der Technologien zu bleiben. Ich bin begierig darauf, mein Wissen und meine Leidenschaft für Webentwicklung in einer dynamischen Unternehmensumgebung anzuwenden.',
    seeGrades: 'Meine Noten anzeigen',
    downloadCV: 'Mein Lebenslauf herunterladen'
  }
  const text = isEnglish ? english : german
  const handleCVDownload = (e) => {
    e.preventDefault()
    const link = document.createElement('a')
    link.href = '../../../public/assets/Youssef-Mlika-FlowCV-Lebenslauf-20240710.pdf'
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.click()
  }

  const handleGradesDownload = (e) => {
    e.preventDefault()
    const link = document.createElement('a')
  
    link.href = '../../../public/assets/leistung spiegel.png'
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.click()
  }

  return (
    <div className='hero'>
        <div className='hero-text'>
            <h2>About me:</h2>
            <p>{text.thirdP}</p>
            <div className='about-me-btns'>

            <a download='Leistungspiegel.png' href='../../../public/assets/Leistungspiegel.png' onClick={handleGradesDownload}>
              <button >{text.seeGrades}
                <FaEye size={20}/>
              </button>
            </a>
            <a download='Youssef-Mlika-FlowCV-Lebenslauf-20240710.pdf' href='../../../public/assets/Youssef-Mlika-FlowCV-Lebenslauf-20240710.pdf' onClick={handleCVDownload}>
              <button >{text.downloadCV}
                <FaFileDownload size={20}/>
              </button>
            </a>
          </div>
            <a  href='https://github.com/CrypticCoder67458?tab=repositories' className='links'>
                <FaGithub size={40}/>
            </a>
        </div>
        <img  src={heroImg} 
        alt="profile-pic " 
        className='hero-profile-img dark-white-effect'/>
    </div>)

 
}


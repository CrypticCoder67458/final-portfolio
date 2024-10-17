import React from 'react'

import './hero.css'
import '../../Styles/App.css'
import backgroundImg from '../../../public/assets/background.jpg'

export const Hero = ({isEnglish}) => {
  const english = {
    firstP: 'Hi MY NAME IS YOUSSEF & I AM A',
    secondP: 'FRONTEND WEB DEVELOPER',
    thirdP: 'I am currently studying at TU Darmstadt and looking for a position as a Frontend Web Developer/Software ingenieur'
  }
  const german = {
    firstP: 'Hallo, ich bin YOUSSEF und ich bin ein',
    secondP: 'FRONTEND WEB ENTWICKLER',
    thirdP: 'Ich studiere momentan an der TU Darmstadt und suche eine Stelle als Frontend Web Entwickler/Software Ingenieur'
  }
  const text = isEnglish ? english : german

  return(
      <div className="background-div">
        <h2>{text.firstP}</h2>
        <h1>{text.secondP}</h1>
        <p>{text.thirdP}</p>
      </div>
  )
  
 
}

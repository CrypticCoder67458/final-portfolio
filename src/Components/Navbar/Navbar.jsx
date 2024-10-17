import React from 'react'
import './navbar.css'




export const Navbar = ({setIsEnglish,isEnglish}) => {


  return (
    <nav >
        <h1>Youssef Mlika</h1>
        <div className='nav-links-container'>
            <ul className='nav-links'>
                <li><a href='#about'>{isEnglish ? 'About' : 'Über'}</a></li>
                <li><a href='#skills'>{isEnglish ? 'Skills' : 'Fähigkeiten'}</a></li>
                <li><a href='#projects'>{isEnglish ? 'Projects' : 'Projekte'}</a></li>
                <li><a href='#contact'>{isEnglish ? 'Contact' : 'Kontakt'}</a></li>
            </ul>
            <div className='lang-container'>
                <img 
                src={`https://flagsapi.com/${isEnglish ? 'US' : 'DE'}/flat/64.png`}/>
                <p>{isEnglish ? 'English' : 'Deutsch'}</p>
                <ul className='lang-menu'>
                <li onClick={() => setIsEnglish(true)}><img 
                src="https://flagsapi.com/US/flat/64.png"/>English</li>
                <li  onClick={() => setIsEnglish(false)}><img 
                src="https://flagsapi.com/DE/flat/64.png"/>Deutsch</li>
            </ul>
            </div>
            
        </div>
        
    </nav>
  )
}

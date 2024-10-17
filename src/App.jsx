import React from 'react'
import { Hero } from "./Components/Hero/Hero"
import { Navbar } from "./Components/Navbar/Navbar"
import './Styles/App.css'
import { Skills } from "./Components/Skills/Skills"
import { AboutMe } from "./Components/AboutMe/AboutMe"
import { Projects } from "./Components/Projects/Projects"
import { Contact } from "./Components/Contact/Contact"
import { Footer } from "./Components/Footer/Footer"
function App() {
  const [isEnglish,setIsEnglish]=React.useState(true)

  return(
    <div className="app">
        <Navbar setIsEnglish={setIsEnglish} 
        isEnglish={isEnglish}/>
        <Hero isEnglish={isEnglish}/>
        <AboutMe isEnglish={isEnglish}/>
        <Skills isEnglish={isEnglish}/>
        <Projects 
        isEnglish={isEnglish}/>
        <Contact isEnglish={isEnglish}/>
        <Footer/>


    </div>
  )
}

export default App

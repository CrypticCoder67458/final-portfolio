import React from 'react'
import './contact.css'
import { ContactOptions } from './ContactOptions'
import { ContactForm } from './ContactForm'
export const Contact = ({isEnglish}) => {
  return (
    <div className='contact' id='contact'>
        <ContactOptions isEnglish={isEnglish}/>
        <ContactForm isEnglish={isEnglish}/> 
    </div>
  )
}

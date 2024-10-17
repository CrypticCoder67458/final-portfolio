import React from 'react'
import { TbSend } from "react-icons/tb";
export const ContactForm = ({isEnglish}) => {
  const placeholder = {
    name:'Gib deinen Namen ein',
    email:'Gib deine E-Mail ein',
    message:'Gib deine Nachricht ein'
  }
  const labels = {
    name:'Name',
    email:'Mail',
    message:'Nachricht'
  }
  if(isEnglish){
    return (
      <div>
        <h2 className='section-title'>Write me a message</h2>
        <form className='contact-form'>
          <div className='form-control'>
            <label>{labels.name}: </label>
            <input type="text"placeholder={placeholder.name} />
          </div>
          <div className='form-control'>
            <label>{labels.email}: </label>
            <input 
              type="email"
              placeholder={placeholder.email}
              name='email' />
          </div>
          <div className='form-control'>
            <label>{labels.message}: </label>
            <textarea
              cols={50}
              rows={8}
              type="text"
              placeholder={placeholder.message}
              name='message' />
          </div>
          <button>send the message <TbSend size={20} /></button>
        </form>
      </div>
    )
  }else{
    return (
      <div>
        <h2 className='section-title'>Schreib mir eine Nachricht</h2>
        <form className='contact-form'>
          <div className='form-control'>
            <label>{labels.name}: </label>
            <input type="text"placeholder={placeholder.name} />
          </div>
          <div className='form-control'>
            <label>{labels.email}: </label>
            <input 
              type="email"
              placeholder={placeholder.email}
              name='email' />
          </div>
          <div className='form-control'>
            <label>{labels.message}: </label>
            <textarea
              cols={50}
              rows={8}
              type="text"
              placeholder={placeholder.message}
              name='message' />
          </div>
          <button>Sende die Nachricht <TbSend size={20} /></button>
        </form>
      </div>
    )
  }
}

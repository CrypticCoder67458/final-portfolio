import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
export const ContactOptions = ({isEnglish}) => {
  const contactOption=[
    {
      element:<AiOutlineMail size={25}/> ,
      title:"E-Mail",
      text:"mlikayoussef155@gmail.com",
    },
    {
      element:<FaWhatsapp  size={25}/> ,
      title: "WhatsApp",
      text:"+49-16095528732",
    }
  
  ]
  return (
    <div className='contact-options'>
        <h2 className='section-title'>Talk to me</h2>
        <div className='contact-options-container'>
            {contactOption.map((contact)=>(
              <div className='contact-option' key={contact.title}>
                {contact.element}
                <h3>{contact.title}</h3>
                <p>{contact.text}</p>
                <div className='write-me zoom-effect'>{isEnglish ? 'Write me' : 'Schreib mir'}  <FaArrowRightLong size={16}/> </div>

            </div>
          ))}
        </div>
    </div>
    )
  
}

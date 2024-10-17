import React from 'react'
import './footer.css'
import { AiFillFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export const Footer = () => {
  return (
    <footer>
        <h2 className='footer-title'>Youssef Mlika</h2>
        <ul className='flex footer-links'>
            {['About', 'Projects', 'Contact'].map((link, index) => (
              <li key={index}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
        </ul>
        <ul className='flex'>
            <li><AiFillFacebook size={30}/></li>
            <li><FaInstagram size={28}/></li>   
            <li><FaXTwitter  size={25}/></li>
            <a  href='https://github.com/CrypticCoder67458?tab=repositories' >
                <FaGithub size={28}/>
            </a>
        </ul>
        
        <p>Copyright &copy; 2024. All Rights Reserved</p>
    </footer>
  )
}

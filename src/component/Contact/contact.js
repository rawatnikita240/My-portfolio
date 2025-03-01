import React from 'react';
import './contact.css';
import Linkedin from '../../assets/linkedin.webp'
import Mail from '../../assets/mail.png' 

const Contact =() =>{
  return (
    <div id="contact">
        <h1 className='contactPageTitle'> Contact Me </h1>
        <div className='links'>
          <a href="https://www.linkedin.com/in/nikita-rawat-364b741b0/">
         <img src={Linkedin} alt="linkedin" className='link' /></a>
           <a href='rawatnikita240@gmail.com'><img src={Mail} alt='mail' className='link'/></a>
      </div>
    </div>
  )
}

export default Contact
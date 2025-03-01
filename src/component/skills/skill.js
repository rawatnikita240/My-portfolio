import React from 'react'
import './skill.css';
import WebDeveloper from '../../assets/webdeveloper.png'
import DigitalMarketing from '../../assets/DigitalMarketing.png'

const Skill =()=> {
  return (
    <section id='skill'>
        <span className='skillTitle'> About Me</span>
        <span className='skillDesc'>Proficient in designinig,devloping,and maintaining responsive websites and web applications,Skilled in front-end and back-end technologies,including HTML,CSS,JavaScript ,React,Node.js,and Databases.Experienced in optimizing user experiences and implementing SEO best practices. Adept at problem solving and delivering scalable solutions</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={WebDeveloper} alt='webdeveloper' className='skillBarImg'/>
            <div className='skillBarText'><h2>Web Developer</h2></div>
          </div>
          <div className='skillBar'>
            <img src={DigitalMarketing} alt='digitalmarketing' className='skillBarImg'/>
            <div className='skillBarText'><h2>Digital Marketing</h2></div>
          </div>
        </div>
    </section>
  )
}

export default Skill
import React from 'react'
import './intro.css';
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll'
const Intro = () => {
  return (
 <section id='intro'>
    <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introtext'>I'm <span className='introName'>Nikita Rawat</span><br/></span>
        <p className='introPara'> A skilled developer with a Digital marketing executive passion for creating resposive websites <br/>
           and executing data-driven marketing strategies. I specialize in building user-friendly <br/> digital solution using 
           modern technologies and driving growth through SEO, social media. </p> 
         <Link><button className='btn'><img src={btnImg} alt='hire' className='btnImg'/>Hire Me</button></Link>
     </div>
    <img src={bg} alt='Profile'className='bg'/>
 </section>
  )
}
export default Intro;
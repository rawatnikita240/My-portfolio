import React from 'react'
import './works.css'
import Tesinfotech from '../../assets/tes_infotech.jpg';
import Codsoft from '../../assets/codsoft.jpg';
import Ison from '../../assets/ison_logo.png'

const Works=() => {
  return (
    <section id= 'works'>
        <h2 className='workstitle'>My portfolio</h2>
        <span className='worksDesc'> I had the opportunity to work with a diverse group of companies. </span>
        <div className='worksImgs'>
            <img src={Tesinfotech} alt='tesinfotech' className='worksImg'/>
            <img src={Codsoft} alt='codsoft' className='worksImg'/>
            <img src={Ison} alt='ison' className='worksImg'/>        
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works
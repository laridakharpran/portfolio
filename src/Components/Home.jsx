import React from 'react'
import pdf from '../pdf/resume.pdf'
import hero from './data/hero.json'

export const Home = () => {
  return(
    <>
    <div  id="Home" className='container home'>
    <div className='left'>
     <h1> Hi my name is Larida Kharpran</h1>
     Im frontend Developer, here my resume
     <br/>
      <a 
      href={pdf} 
      download="resume.pdf" 
      className='btn btn-outline-warning'>Downloaded Resume</a>
    </div>
    <div className='right'>
    <div className='img'>
    <img src={`/asset/${hero.imgSrc}`} alt="hero" />
</div>
    </div>
    </div>
    </>
  )
}

export default Home
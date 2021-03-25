import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import '../css/hero.css'

const Hero = (props) => {
  const background = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className='hero-container'>
      <article className={props.className}>
      </article>
      <div className='overlay-container'>
        <div className="hero-description">
          <div className='hero-text'>
          </div>
          <button type='button'></button>
        </div>
      </div>
    </div>
  )
}

export default Hero
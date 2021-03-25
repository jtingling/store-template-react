import { useEffect, useState, useContext } from "react"
import { Link } from 'react-router-dom';
import { CheckoutContext } from '../App';
import '../css/landing.css'
import ImageGallary from 'react-image-gallery';
import CategoryHeader from './CategoryHeader'
import Featured from './Featured';
import Hero from './Hero';

const Landing = (props) => {
  let context = useContext(CheckoutContext);
  useEffect(() => {
    props.setHeader({
      title: "Welcome to the Template Store!",
      text: {
        a: "Some eye-catching text!",
        b: "something something"
      },
      link: <Link to='/aboutus'>Featured Product!</Link>,
      imageUrl: "https://cdn.shopify.com/s/files/1/0288/6926/3438/files/IMG_7907_3024x.JPG?v=1593068622"
    })
  }, [])
  return (
    <section className='landing-section'>
      {console.log(context)}
      <div className='hero-top'>
      </div>
      <div className='thumbnail-categories'>
        <CategoryHeader className='thumbnails' />
      </div>
      <div className='video-container'>
        <h2 className='video-title'>van gogh x bibisama</h2>
        <div>
          <iframe src="//www.youtube.com/embed/YNdS5wqMj7c?rel=0&amp;showinfo=0&amp;vq=720" frameborder="0" allowfullscreen=""></iframe>
        </div>
        <div>
          <h2 className='video-subtitle'>STARRY NIGHT WANDERER BOMBER JACKET</h2>
          <p className='video-subtext'>
            "Gogh” to infinity and beyond in this official collaboration between Immersive Van Gogh Exhibit
            and Bibisama Apparel.  Vincent Van Gogh was the original Starboy who was infatuated with the night
            sky and all it encompassed. Using bright colours and his trademark brush stroke, this exclusive illustration
            of “Starry Night” stretches past our ordinary perceptions and into the unknown.
            <br/><Link to='/painting'>Get yours now.</Link>
          </p>
        </div>
      </div>
      <Featured/>
      <Hero className='hero-middle'/>
    </section>
  )
}

export default Landing
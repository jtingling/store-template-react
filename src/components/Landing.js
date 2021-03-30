import { useEffect, useContext } from "react"
import { Link } from 'react-router-dom';
import { CheckoutContext } from '../App';
import '../css/landing.css'
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
      link: <Link to='/painting'>J A C K E T S</Link>,
      imageUrl: "https://cdn.shopify.com/s/files/1/0288/6926/3438/files/IMG_7907_3024x.JPG?v=1593068622"
    })
  }, [])
  if (props.header.title === undefined) {
    return <h1>Loading...</h1>
  } else {
    return (
      <section className='landing-section'>
        <div className='hero-top'>
          <h1>{props.header.title}</h1>
          <div className='btn-container'><button className='landing-button' type="button">{props.header.link}</button></div>
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
              <br /><Link to='/painting'>Get yours now.</Link>
            </p>
          </div>
        </div>
        <Featured productType={"SHOES"} className={["feature-title-shoes", "feature-container-shoes"]} />
        <Hero productType={"PAINTING"} className='hero-middle' />
        <Featured productType={"ACCESSORIES"} className={["feature-title-accessories", "feature-container-accessories"]} />
        <div className={"feature-block"}>
          <div className="page-width">
            <div className={"feature-text"}>
              <h2>Craftsmanship Meets Style in Anime Streetwear</h2>
              <p>At <a href="https://bibisama.com/pages/about" title="https://bibisama.com/pages/about" className="text-link">
                Bibisama</a>, we focus on combining beautiful artwork with quality materials. The result is Asian and anime
                pop culture-inspired clothing that’s comfortable to wear at home, and stylish in the streets.&nbsp;<br />
              </p>
              <p>Our products are meticulously crafted to ensure durability and serve as a timeless companion to your ensembles.
              We make all of our anime streetwear in house with high-tech processes and thoroughly tested materials. Our designs
              are original works that you won’t find anywhere else.
            </p>
            </div>
          </div>
        </div>
      </section>
    )

  }

}

export default Landing
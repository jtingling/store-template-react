import { useEffect, useState, useContext } from "react"
import { Link } from 'react-router-dom';
import { getStoreData } from '../ShopifyAPI/storefront-api';
import { query } from '../ShopifyAPI/queries'
import { CheckoutContext } from '../App'
import '../css/hero.css'

const Hero = (props) => {
  const [featuredItem, setFeaturedItem] = useState(false);
  const context = useContext(CheckoutContext);
  useEffect(() => {
    try {
      getStoreData(query(...["first", undefined, undefined, `${props.productType}`])).then((queryData) => { setFeaturedItem(queryData.data.products) })
    } catch (e) {
      console.log(e)
    }
  }, [])
  if (!featuredItem) {
    return <h1>Data not ready yet.</h1>
  } else {
    return (
      <div className='hero-container'>
        <article className={props.className}>
        </article>
        <div className='overlay-container'>
          <div className="hero-description">
            <div><h4>BIBISAMA X TEZUKA PRODUCTION</h4></div>
            <h2 class="hero-title">Astro Boy Bomber Jacket</h2>
            <div className='hero-text'>
              <p>Bibisama is honored to have the chance to collaborate with the legendary Tezuka Production on Astro Boy.
              We have taken this unique opportunity to create our interpretation of their iconic character in a limited set
              of officially licensed bomber jackets.
              </p>
            </div>
            <button onClick={() => context.scroll() }type='button'><Link
              to={{
                pathname: `/${featuredItem.edges[3].node.handle}`,
                state: { productData: featuredItem.edges[3].node}
              }}>
                S H O P</Link>
            </button>
          </div>
        </div>
      </div>
    )
  }

}

export default Hero
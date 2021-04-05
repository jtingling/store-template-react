import { useEffect, useState } from "react"
import { getStoreData } from '../ShopifyAPI/storefront-api';
import { query } from '../ShopifyAPI/queries'
import ProductCard from './Products/ProductCard';
import '../css/featured.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Featured = (props) => {
  const [featuredData, setFeaturedData] = useState(false);

  const slideRight = (pixelCount) => {
    const elementToScroll = document.getElementsByClassName("feature-container-shoes")[0];
    if (elementToScroll.scrollLeft < elementToScroll.scrollWidth) {
      elementToScroll.scrollLeft += pixelCount;
    } else if (elementToScroll.scrollLeft > elementToScroll.scrollWidth) {
      elementToScroll.scrollLeft = (elementToScroll.scrollWidth - elementToScroll.clientWidth);
    }
  }
  const slideLeft = (pixelCount) => {
    const elementScroll = document.getElementsByClassName("feature-container-shoes")[0];
    if (elementScroll.scrollLeft > pixelCount) {
      elementScroll.scrollLeft -= pixelCount;
    } else if (elementScroll.scrollLeft < pixelCount) {
      elementScroll.scrollLeft = 0;
    }
  }

  useEffect(() => {
    try {
      console.log("Fetching product data...");
      getStoreData(query(...["first", undefined, undefined, `${props.productType}`])).then((queryData) => { setFeaturedData(queryData.data.products) })
    } catch (e) {
      console.log(e)
    }
  }, [])

  if (!featuredData) {
    return <h1>Data not ready yet.</h1>
  } else {
    return (
      <article className='featured-content'>
        {
          props.productType === "SHOES" ? (
            <div>
              <h2 className={props.className[0]}>FEATURED</h2>
              <div className={props.className[1]}>
              <div id="fixed-width">
                  <button type="button" id="left-arrow" onClick={() => slideLeft(600)}><FontAwesomeIcon icon={faArrowLeft} /></button>
                  <button type="button" id='right-arrow' onClick={() => slideRight(600)}><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                {
                  featuredData.edges.map((product) => {
                    return (
                      <ProductCard
                        key={product.node.id}
                        product={product.node}
                        images={product.node.images} />
                    )
                  })
                }
              </div>
            </div>
          ) : <></>
        }
        {
          props.productType === "ACCESSORIES" ? (
            <div>
              <h2 className={props.className[0]}>Stylish Accessories</h2>
              <div className={props.className[1]}>
                {
                  featuredData.edges.map((product) => {
                    return (
                      <ProductCard
                        key={product.node.id}
                        product={product.node}
                        images={product.node.images} />
                    )
                  })
                }
              </div>
            </div>
          ) : <></>
        }
      </article>
    )
  }
}

export default Featured
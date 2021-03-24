import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { getStoreData } from '../ShopifyAPI/storefront-api';
import { query } from '../ShopifyAPI/queries'
import ProductCard from './Products/ProductCard';
import '../css/featured.css';

const Featured = (props) => {
  const [featuredData, setFeaturedData] = useState(false);

  useEffect(() => {
    try {
      console.log("Fetching product data...");
      getStoreData(query(...["first", undefined, undefined, "SHOES"])).then((queryData) => { setFeaturedData(queryData.data.products) })
    } catch (e) {
      console.log(e)
    }
  }, [])

  if (!featuredData) {
    return <h1>Data not ready yet.</h1>
  } else {
    return (
      <article>
        <h2 className='feature-title'>FEATURED</h2>
        <div className='feature-container'>
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
      </article>
    )
  }
}

export default Featured
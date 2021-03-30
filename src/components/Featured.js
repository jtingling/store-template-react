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
      getStoreData(query(...["first", undefined, undefined, `${props.productType}`])).then((queryData) => { setFeaturedData(queryData.data.products) })
    } catch (e) {
      console.log(e)
    }
  }, [])

  if (!featuredData) {
    return <h1>Data not ready yet.</h1>
  } else {
    return (
      <article>
        {
          props.productType === "SHOES" ? <h2 className={props.className[0]}>FEATURED</h2> : <></>
        }
        {
          props.productType === "ACCESSORIES" ? <h2 className={props.className[0]}>Stylish Accessories</h2> : <></>
        }

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
      </article>
    )
  }
}

export default Featured
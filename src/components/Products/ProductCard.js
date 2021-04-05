import '../../css/product-card.css'
import { Link, useLocation } from 'react-router-dom';
import stickyHeader from '../Utilities/scrollableHeader.js';
import { useState, useEffect, useContext } from 'react';
import { CheckoutContext } from '../../App';

const ProductCard = (product) => {
  const [visibility, setVisibility] = useState(false);
  const [show, setShow] = useState(false);
  let context = useContext(CheckoutContext);

  const showText = () => {
    setVisibility(true);
  }

  const hideText = () => {
    setVisibility(false)
  }

  const showModal = () => {
    setShow(!show);
  }


  useEffect(()=>{
    stickyHeader('nav-other');
  }, [])
 

  if (product.product === undefined) {
    return <h1>Loading Product Data</h1>
  } else {
    return (
      <>
        <article className='card-container'
          onMouseOver={() => { showText(); }}
          onMouseOut={() => { hideText(); }}
          onClick={e => { showModal(); context.scroll(); }}>
          <Link
            key={product.product.id}
            to={{
              pathname: `/${product.product.handle}`,
              state: { productData: product.product }
              }}>
            <div id={product.product.id}>
              {
                product.images.edges.map((images, idx) => {
                  if (idx === 0) {
                    return <img
                      key={images.node.id}
                      className='product-img'
                      src={images.node.originalSrc}
                      alt='more images' />
                  }
                })
              }
            </div>
          </Link>
          <div>
            <p className={visibility ? 'product-description:hover' : 'product-description'}>
              {product.product.handle}<br />
              ${product.product.variants.edges[0].node.price}
            </p>
          </div>
        </article>
      </>
    )
  }
}

export default ProductCard;

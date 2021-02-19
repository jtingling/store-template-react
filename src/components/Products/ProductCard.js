import './product-card.css'

import ProductDetailModal from './ProductDetailModal';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProductCard = (product) => {
  const [visibility, setVisibility] = useState(false);
  const [show, setShow] = useState(false);
  

  const showText = () => {
    setVisibility(true);
  }

  const hideText = () => {
    setVisibility(false)
  }

  const showModal = () => {
    console.log(show);
    setShow(!show);
  }

  return (
    <>
      <article className='card-container'
        onMouseOver={() => { showText(); }}
        onMouseOut={() => { hideText(); }}
        onClick={e => { showModal(); }}>
        <div id={product.product.id}>
          {
            product.images.edges.map((images, idx) => {
              if (idx === 0) {
                return <img
                  key={images.node.id}
                  className='product-img'
                  src={images.node.originalSrc}
                  alt='more images' />
              } else {
                return <img
                  key={images.node.id}
                  className='product-img'
                  src={images.node.originalSrc}
                  alt='more images' hidden />
              }
            })
          }
        </div>
        <div>
          <p className={visibility ? 'product-description:hover' : 'product-description'}>
            {product.product.handle}<br />
            {product.product.variants.edges[0].node.price}
          </p>
        </div>
      </article>
      {
          <ProductDetailModal
            onClose={showModal}
            show={show}
            handle={product.product.handle}
            descriptionHtml={product.product.descriptionHtml} />
        }
    </>
  )
}

export default ProductCard;

import './product-card.css'
import { useState, useRef } from 'react';


const ProductCard = (product) => {
  const [visibility, setVisibility] = useState(false);
  const imgRef = useRef(null);

  const showText = () => {
    setVisibility(true);
  }

  const hideText = () => {
    setVisibility(false)
  }

  return (
    <div
      className='card-container'
      onMouseOver={
        () => {
          showText();
        }
      }
      onMouseOut={
        () => {
          hideText();
        }
      }>
      <div ref={imgRef} id={product.product.id}>
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
    </div>
  )
}

export default ProductCard;

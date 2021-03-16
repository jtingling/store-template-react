import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckoutContext } from '../../App'

import ImageGallary from 'react-image-gallery';
import '../../css/productDetail.css'

const ProductDetailModal = (props) => {
    const checkout = useContext(CheckoutContext);
    const { productData } = props.location.state;

    const getImages = () => {
        let images = [];
        if (productData) {
            productData.images.edges.map((productImage)=>{
                images.push({ original: productImage.node.originalSrc })
            })
        }
        return images;
    }


    console.log(productData);

    if (productData === undefined) {
        return <h1>Loading Data...</h1>
    } else {
        return (
            <article className='modal-window'>
                <div className='product-images-container'>
                    <ImageGallary 
                        items={getImages()}
                        showNav={false}
                        showBullets={true}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        useBrowserFullscreen={false}
                        autoPlay={true} 
                        showPlayButton={false}/>
                </div>
                <div className='product-description-container'>
                    <div className='product-title'>
                        <h1>{productData.handle}</h1>
                        <div>
                            <h2>${productData.variants.edges[0].node.price}</h2>
                            <p><Link to='/support'>Shipping</Link> calculated at checkout</p>
                        </div>
                    </div>
                    <div className='sizing-container'>
                        <h3 className='sizing-title'>Size</h3>
                        <div className='sizing-options'>
                            <div></div>
                        </div>
                    </div>
                    <div className='product-button-container'>
                        <button type='button' onClick={() => checkout.addItemToCart(1, productData.variants.edges[0].node.id)}>Add to Cart</button>
                        <button type='button' onClick={() => checkout.buySingleItem(productData.variants.edges[0].node.id)}>Buy It Now</button>
                    </div>
                    <div className='description-container'>
                        <div className='description'>
                            <p>{productData.descriptionHtml}</p>
                            <div>
                                <ul>
                                    <li>Artist: ...</li>
                                    <li>Model: ...</li>
                                </ul>
                            </div>
                        </div>
                        <div className='sizing-chart'>
                            <img />
                        </div>
                        <div className='care-instructions'>
                            <ul>
                                <li>All of our shirts come preshrunk</li>
                                <li>Machine washable</li>
                                <li>Cold wash only</li>
                                <li>Tumble dry on low heat</li>
                                <li>Do not bleach</li>
                            </ul>
                        </div>
                        <div className='clothing-info'>
                            <ul>
                                <li>T-shirts and clothing are made in-house</li>
                                <li>95% cotton, 5% spandex</li>
                                <li>Designed in-house</li>
                                <li>Produced in-house</li>
                                <li>No outsourcing</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button type='button' onClick={() => checkout.openCheckout()}>Checkout</button>
            </article>
        )
    }
}

export default ProductDetailModal
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckoutContext } from '../../App'

import ImageGallary from 'react-image-gallery';
import '../../css/productDetail.css'

const ProductDetailModal = (props) => {
    const checkout = useContext(CheckoutContext);
    const [variantId, setVariantId] = useState(0);
    const { productData } = props.location.state;

    const getImages = () => {
        let images = [];
        if (productData) {
            productData.images.edges.forEach((productImage)=>{
                images.push({ original: productImage.node.originalSrc })
            })
        }
        return images;
    }
    const variantSelection = (variantIndex) => {
        if (productData) {
            if(productData.variants.edges[variantIndex].node.availableForSale) {
                setVariantId(productData.variants.edges[variantIndex].node.id);
            } else {
                return null
            }
        } else {
            throw new Error("no product");
        }
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
                            {
                                productData.options[0].values.map((size, idx)=>{
                                    return <button type='button' onClick={()=> variantSelection(idx)}>{size}</button>
                                })
                            }
                            <div></div>
                        </div>
                    </div>
                    <div className='product-button-container'>
                        <button type='button' onClick={() => checkout.addItemToCart(1, variantId)}>Add to Cart</button>
                        <button type='button' onClick={() => checkout.buySingleItem(variantId)}>Buy It Now</button>
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
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckoutContext } from '../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ImageGallary from 'react-image-gallery';
import '../../css/productDetail.css'

const ProductDetailModal = (props) => {
    const { productData } = props.location.state;
    const checkout = useContext(CheckoutContext);
    const [variantId, setVariantId] = useState(productData.variants.edges[0].node.id);
    const [isHidden, setHidden] = useState([]);

    const getImages = () => {
        let images = [];
        if (productData) {
            productData.images.edges.forEach((productImage) => {
                images.push({ original: productImage.node.originalSrc })
            })
        }
        return images;
    }
    const variantSelection = (variantIndex) => {
        if (productData) {
            if (productData.variants.edges[variantIndex].node.availableForSale) {
                setVariantId(productData.variants.edges[variantIndex].node.id);
            } else {
                return null
            }
        } else {
            throw new Error("no product");
        }
    }
    useEffect(() => {
        setHidden([true, true, true, true])
    }, [])
    if (productData === undefined) {
        return <h1>Loading Data...</h1>
    } else {
        return (
            <>
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
                            showPlayButton={false} />
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
                                    productData.options[0].values.map((size, idx) => {
                                        return <button type='button' className='size-buttons' onClick={() => variantSelection(idx)}>{size}</button>
                                    })
                                }
                                <div></div>
                            </div>
                        </div>
                        <div className='product-button-container'>
                            <div><button type='button' className='product-addToCart' onClick={() => checkout.addItemToCart(1, variantId)}>ADD TO CART</button></div>
                            <div><button type='button' className='product-buyNow' onClick={() => checkout.buySingleItem(variantId)}>BUY IT NOW</button></div>
                        </div>
                        <div className='dropdown-container'>
                            <button type='button' className='dropdown' onClick={() => setHidden([!isHidden[0], isHidden[1], isHidden[2], isHidden[3]])}>
                                Description
                            <span ><FontAwesomeIcon icon={isHidden[0] ? faAngleDown : faAngleUp} /></span>
                            </button>
                            {
                                isHidden[0] ? <div id='description' hidden><p >{productData.descriptionHtml}</p></div> :
                                    <div id='description' ><p >{productData.descriptionHtml}</p></div>
                            }

                            <button type='button' className='dropdown' onClick={() => setHidden([isHidden[0], !isHidden[1], isHidden[2], isHidden[3]])}>
                                Sizing Chart
                            <span><FontAwesomeIcon icon={isHidden[1] ? faAngleDown : faAngleUp} /></span>
                            </button>
                            {
                                isHidden[1] ? <code hidden>Sizing chart image goes here</code> : <code>Sizing chart image goes here</code>
                            }
                            <button type='button' className='dropdown' onClick={() => setHidden([isHidden[0], isHidden[1], !isHidden[2], isHidden[3]])}>
                                Care Instructions
                            <span><FontAwesomeIcon icon={isHidden[2] ? faAngleDown : faAngleUp} /></span>
                            </button>
                            {
                                isHidden[2] ?
                                    <div hidden>
                                        <ul>
                                            <li>All of our shirts come preshrunk</li>
                                            <li>Machine washable</li>
                                            <li>Cold wash only</li>
                                            <li>Tumble dry on low heat</li>
                                            <li>Do not bleach</li>
                                        </ul>
                                    </div>
                                    :
                                    <div>
                                        <ul>
                                            <li>All of our shirts come preshrunk</li>
                                            <li>Machine washable</li>
                                            <li>Cold wash only</li>
                                            <li>Tumble dry on low heat</li>
                                            <li>Do not bleach</li>
                                        </ul>
                                    </div>
                            }
                            <button type='button' className='dropdown' onClick={() => setHidden([isHidden[0], isHidden[1], isHidden[2], !isHidden[3]])}>
                                How This Was Made
                            <span><FontAwesomeIcon icon={isHidden[3] ? faAngleDown : faAngleUp} /></span>
                            </button>
                            {
                                isHidden[3] ?
                                    <div hidden>
                                        <ul>
                                            <li>T-shirts and clothing are made in-house</li>
                                            <li>95% cotton, 5% spandex</li>
                                            <li>Designed in-house</li>
                                            <li>Produced in-house</li>
                                            <li>No outsourcing</li>
                                        </ul>
                                    </div>
                                    :
                                    <div>
                                        <ul>
                                            <li>T-shirts and clothing are made in-house</li>
                                            <li>95% cotton, 5% spandex</li>
                                            <li>Designed in-house</li>
                                            <li>Produced in-house</li>
                                            <li>No outsourcing</li>
                                        </ul>
                                    </div>
                            }
                        </div>
                    </div>
                </article>
                <div className='back-btn'>
                    <button type='button'><Link to={productData.productType.toLowerCase()}><FontAwesomeIcon icon={faArrowLeft}/> Back to {productData.productType.toLowerCase()}</Link></button>
                </div>
            </>
        )
    }
}

export default ProductDetailModal
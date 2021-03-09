import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CheckoutContext } from '../../App'

const ProductDetailModal = (props) => {
    const checkout = useContext(CheckoutContext);
    const { productData } = props.location.state;

    console.log(productData);

    if (productData === undefined) {
        return <h1>Loading Data...</h1>
    } else {
        return (
            <article className='modal-window'>
                <Link to={{
                    pathname: `/${productData.productType.toLowerCase()}`
                    }}>
                    <button type='button'>Back to {`${productData.productType.toLowerCase()}`}</button>
                </Link>
                <div className='product-images-container'>
                </div>
                <div className='product-description-container'>
                    <div className='product-title'>
                        <h2>{productData.handle}</h2>
                        <div>
                            <h5>{productData.variants.edges[0].node.price}</h5>
                        </div>
                    </div>
                    <div className='sizing-container'>
                        <div>

                        </div>
                        <div>

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
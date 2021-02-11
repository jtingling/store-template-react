import { useState } from 'react';

const ProductDetailModal = (props) => {

    const onClose = () => {
        props.onClose();
    }
    if (!props.show) {
        return null;
    } else {
        return (
            <article>
                <button type='button' onClick={ () => {onClose()}}>close</button>
                <div className='product-images-container'>

                </div>
                <div className='product-description-container'>
                    <div className='product-title'>
                        <h2>{props.handle}</h2>
                    </div>
                    <div className='sizing-container'>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='product-button-container'>
                        <button></button>
                        <button></button>
                    </div>
                    <div className='description-container'>
                        <div className='description'>
                            <p>{props.descriptionHtml}</p>
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
            </article>
        )

    }
}

export default ProductDetailModal
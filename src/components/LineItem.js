import { useContext } from 'react'
import { CheckoutContext } from '../App'
import '../css/lineItem.css'

const LineItem = (props) => {
    let checkout = useContext(CheckoutContext);

    return (
        <>
            <div className='cart-item'>
                <div className="row-items">
                    <div className='row-product'>
                        <div className='row-product-img'>
                            <img src={props.lineItem.variant.image.src} alt={props.lineItem.type} />
                        </div>
                        <div className='row-product-info'>
                            <p>{props.lineItem.variant.sku}</p>
                            <p className='row-variant-title'>{props.lineItem.variant.title}<p id="mobile-price">${props.lineItem.variant.price}</p></p>
                        </div>
                    </div>
                    <div className='row-item'>
                        <div className="row-item-price">
                            ${props.lineItem.variant.price}
                        </div>
                        <div className='row-item-quantity'>
                            <div className='quantity'>
                                <form>
                                <input
                                            type='number' min='0' max='10' name="quantity"
                                            value={props.lineItem.quantity}
                                            onChange={(e) => checkout.updateQuantity(e, props.lineItem)} />
                                </form>
                            </div>
                            {
                                <button type='button' className='remove-btn' onClick={() => checkout.deleteItem(props.lineItem.id)}>remove</button>
                            }
                        </div>
                        <div className='row-item-total'>
                            <div>${(props.lineItem.quantity * parseInt(props.lineItem.variant.price, 10))}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LineItem;
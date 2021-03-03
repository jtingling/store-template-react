import { useContext, useEffect } from 'react'
import { CheckoutContext } from '../App'

const LineItem = (props) => {
    let checkout = useContext(CheckoutContext);

    useEffect(()=>{
        console.log(props.lineItem);
    })
    return (
        <>
            <div className='cart-item'>
                <div className='cart-info'>
                    <p>{props.lineItem.title}</p>
                </div>
                <div className='cart-price'>

                </div>
                <div className='cart-quantity'>
                    <div className='quantity'>
                        <form>
                            <label>Quantity:
                                <input 
                                    type='number' min='0' max='10' name="quantity" 
                                    value={props.lineItem.quantity} 
                                    onChange={(e)=>checkout.updateQuantity(e, props.lineItem)}/>
                            </label>
                        </form>
                    </div>
                    {
                        <button type='button' className='remove-btn' onClick={() => checkout.deleteItem(props.lineItem.id)}>remove</button>
                    }
                </div>
                <div className='cart-item-total'>

                </div>
            </div>
        </>
    )
}

export default LineItem;
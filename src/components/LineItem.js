import { useContext, useState, useEffect } from 'react'
import { CheckoutContext } from '../App'
import { client } from '../ShopifyAPI/client';

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
                                <select value={props.lineItem.quantity} onChange={(e)=>checkout.updateQuantity(e, props.lineItem)}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                </select>
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
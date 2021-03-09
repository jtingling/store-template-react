import { useContext } from 'react'
import LineItem from './LineItem'
import { Link } from 'react-router-dom';
import { CheckoutContext } from '../App'

const Cart = (props) => {
    let checkout = useContext(CheckoutContext);

    if (props.checkout === undefined) {
        return <h1>loading cart</h1>
    } else {
        return (
            <>
                <section>
                    <h2>Cart</h2>
                    <div className='cart-container'>
                        {
                            props.checkout.cart.lineItems.length === 0 ? 
                                <Link to='/'><button type='button' className='continue-shopping'>Continue Shopping</button></Link> :
                                props.checkout.cart.lineItems.map((lineItem, idx) => {
                                    return <LineItem key={idx} lineItem={lineItem} checkoutId={props.checkout.id}/>
                                })
                        }
                    </div>
                    <div className='subTotal'>
                        <div>
                            <h4>SUBTOTAL</h4>
                            <h4>{props.checkout.cart.subTotal}</h4>
                            <p>Shipping, taxes, and discount codes calculated at checkout.</p>
                        </div>
                        <button type='button' onClick={() => checkout.openCheckout()}>Check Out</button>
                    </div>
                    <p>continue shopping</p>
                </section>
            </>
        )
    }
}

export default Cart;
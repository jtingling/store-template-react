import { useContext, useEffect } from 'react'
import LineItem from './LineItem'
import { Link } from 'react-router-dom';
import { CheckoutContext } from '../App'
import '../css/cart.css'

const Cart = (props) => {
    let checkout = useContext(CheckoutContext);

    useEffect(()=> {
        window.scrollTo(0,0);
    }, [])

    if (props.checkout === undefined) {
        return <h1>loading cart</h1>
    } else {
        return (
            <>
            {console.log(props.location)}
                <section className="cart">
                    <h1 className='cart-title'>CART</h1>
                    <div className='cart-labels'>
                        <h4></h4>
                        <h4 id="cart-title-price">PRICE</h4>
                        <h4 id="cart-title-quantity">QUANTITY</h4>
                        <h4 id="cart-title-total">TOTAL</h4>
                    </div>
                    <div className='cart-container'>
                        {
                            props.checkout.cart.quantity === 0 ? <p><i>Cart is empty</i></p> :
                            props.checkout.cart.lineItems.map((lineItem, idx) => {
                                return <LineItem key={idx} lineItem={lineItem} checkoutId={props.checkout.id} />
                            })
                        }
                    </div>
                    <div className='subTotal'>
                        <div>
                        <h4>SUBTOTAL</h4>
                            <h4>${props.checkout.cart.subTotal}</h4>
                        </div>
                            <p>Shipping, taxes, and discount codes calculated at checkout.</p>
                            <button type='button' className='checkout-btn' onClick={() => checkout.openCheckout()}>Check Out</button>

                        <Link to="/"><p >continue shopping</p></Link>
                    </div>
                </section>
            </>
        )
    }
}

export default Cart;
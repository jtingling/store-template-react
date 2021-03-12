import { useContext } from 'react'
import { CheckoutContext } from '../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CartItems = (props) => {
    const context = useContext(CheckoutContext);

    return (
        <>
            {
                props.quantity === 0 ?
                    <div
                        className='pill-menu'
                        onClick={() => context.toggleMenu()}>
                        <div>
                            <FontAwesomeIcon icon={faBars} id='faBars' />
                            <span>M E N U</span>
                        </div>
                    </div> :
                    <div className='cart-menu'>
                        <span
                            className="menu-items"
                            onClick={() => context.toggleMenu()}>
                            <FontAwesomeIcon icon={faBars} id='faBars' />
                            <Link to='/cart'>{props.quantity} Items</Link>
                            <span>${props.checkout.cart.subTotal}</span>
                            <button type='button' onClick={() => context.openCheckout()}>C H E C K O U T
                            </button>
                        </span>
                    </div>
            }
        </>

    )
}

export default CartItems;
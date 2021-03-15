import { useContext, useEffect } from 'react'
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
                        className={context.isOpen ? 'pill-menu-open' : 'pill-menu-closed'}
                        onClick={() => context.toggleMenu()}>
                        <div id='menu'>
                            {context.isOpen ? <span><FontAwesomeIcon icon={faTimes} id='faTimes' /></span> :
                                <div>
                                    <span><FontAwesomeIcon icon={faBars} id='faBars' /></span>
                                    <span id='menu-text'>M E N U</span>
                                </div>
                            }
                        </div>
                    </div> :
                    <div className='cart-menu'>
                        <div className="menu-items">
                            <FontAwesomeIcon onClick={() => context.toggleMenu()} icon={context.isOpen ? faTimes : faBars} id='faBars' />
                            <Link to='/cart'>{props.quantity} Items</Link>
                            <span>${props.checkout.cart.subTotal}</span>
                            <button type='button' onClick={() => context.openCheckout()}>C H E C K O U T</button>
                        </div>
                    </div>
            }
        </>
    )
}

export default CartItems;
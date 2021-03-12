import { useState, useContext, useEffect } from 'react'
import { CheckoutContext } from '../App'
import { Link } from 'react-router-dom';
import '../css/menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import CategoryHeader from './CategoryHeader';

const Menu = (props) => {
    const [quantity, setQuantity] = useState(0);
    const context = useContext(CheckoutContext);


    const hasQuantity = () => {
        return quantity > 0 ? true : false;
    }

    useEffect(() => {
        context.quantity.then(quantity => setQuantity(quantity))
    }, [props.checkout.cart.quantity])

    return (
        <div className="menu-container">
            
            <div className='cart-menu'>
            
                <span onClick={()=> props.toggleMenu()}><FontAwesomeIcon icon={faBars} id='faBars' /></span>
                {
                    quantity === 1 ? <span className="menu-items"><Link to='/cart'>{quantity} Item</Link></span> :
                        <span className="menu-items"><Link to='/cart'>{quantity} Items</Link></span>
                }
                <span>${props.checkout.cart.subTotal}</span>
                <button type='button' onClick={() => context.openCheckout()}>C H E C K O U T</button>
            </div>

        </div>

    )

}

export default Menu;
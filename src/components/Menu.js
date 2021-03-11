import { useState, useContext, useEffect } from 'react'
import { CheckoutContext } from '../App'
import { Link } from 'react-router-dom';
import '../css/menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import CategoryHeader from './CategoryHeader';

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const context = useContext(CheckoutContext);
    const toggleMenu = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);

    }

    const menuWithCart = () => {
        if (quantity > 0) {
            if (isOpen) {
                return (
                    <div className='menu'>
                        <CategoryHeader className={"touch-menu"} />
                        <div>
                            <span><FontAwesomeIcon icon={faTimes} /></span>{quantity}{quantity === 1 ? <span><Link to='/cart'>Item</Link></span> : <span><Link to='/cart'>Items</Link></span>} <span>{props.checkout.cart.subTotal}</span>
                            <button type='button' onClick={() => context.openCheckout()}>Checkout</button>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className='menu'>
                        <span><FontAwesomeIcon icon={faBars} /></span>{quantity}{quantity === 1 ? <span><Link to='/cart'>Item</Link></span> : <span><Link to='/cart'>Items</Link></span>} <span>{props.checkout.cart.subTotal}</span>
                        <button type='button' onClick={() => context.openCheckout()}>Checkout</button>
                    </div>
                )
            }
        } else {
            if (isOpen) {
                return (
                    <>
                        <div className='empty-menu open'>
                            <CategoryHeader className={"touch-menu"} />
                            <div><FontAwesomeIcon icon={faTimes} /></div>
                        </div>
                        
                    </>
                )
            } else {
                return (
                    <div className='empty-menu'><FontAwesomeIcon icon={faBars} /><span>Menu</span></div>
                )
            }
        }
    }

    useEffect(() => {
        context.quantity.then(quantity => setQuantity(quantity))
    }, [props.checkout.cart.quantity])

    return (
        <>
            {
                <div onClick={() => toggleMenu()} className='menu-container'>
                    {
                        menuWithCart()
                    }
                </div>
            }
        </>
    )

}

export default Menu;
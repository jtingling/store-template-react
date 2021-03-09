import { useState, useContext, useEffect } from 'react'
import { CheckoutContext } from '../App'
import { Link } from 'react-router-dom';
import '../css/menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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
                    <>
                        {context.categoryHeader}
                        <FontAwesomeIcon icon={faTimes} />{quantity}{quantity === 1 ? <h5><Link to='/cart'>Item</Link></h5> : <h5><Link to='/cart'>Items</Link></h5>} <h5>{props.checkout.cart.subTotal}</h5>
                        <button type='button' onClick={() => context.openCheckout()}>Checkout</button>
                    </>
                )
            } else {
                return (
                    <>
                        <FontAwesomeIcon icon={faBars} />{quantity}{quantity === 1 ? <h5><Link to='/cart'>Item</Link></h5> : <h5><Link to='/cart'>Items</Link></h5>} <h5>{props.checkout.cart.subTotal}</h5>
                        <button type='button' onClick={() => context.openCheckout()}>Checkout</button>
                    </>
                )
            }
        } else {
            if (isOpen) {
                return (
                    <>{context.categoryHeader}<FontAwesomeIcon icon={faTimes} /></>
                )
            } else {
                return (
                    <><FontAwesomeIcon icon={faBars} /><h2>Menu</h2></>
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
                <div onClick={() => toggleMenu()} className='menu'>
                    {console.log(quantity)}
                    {
                        menuWithCart()
                    }
                </div>
            }
        </>
    )

}

export default Menu;
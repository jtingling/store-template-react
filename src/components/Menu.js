import { useState, useContext, useEffect } from 'react'
import { CheckoutContext } from '../App'
import '../css/menu.css'
import CartItems from './Utilities/CartItems'

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
            <CartItems quantity={quantity} checkout={props.checkout}/>
        </div>

    )

}

export default Menu;
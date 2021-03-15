import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CheckoutContext } from '../App'
const CategoryHeader = (props) => {
    let context = useContext(CheckoutContext);
    
    return (
        <nav className={props.className}>
            <Link to="/shoes"><h5 onClick={()=> context.toggleMenu()} className='nav-links'>Shirts</h5></Link>
            <Link to="/painting"><h5 onClick={()=> context.toggleMenu()} className='nav-links'>Jacket + Sweaters</h5></Link>
            <Link to="/accessories"><h5 onClick={()=> context.toggleMenu()} className='nav-links'>Accessories</h5></Link>
            <Link to="/support"><h5 onClick={()=> context.toggleMenu()} className='nav-links'>Support</h5></Link>
            <Link to="/aboutus"><h5 onClick={()=> context.toggleMenu()} className='nav-links'>About Us</h5></Link>
        </nav>
    )
}

export default CategoryHeader;
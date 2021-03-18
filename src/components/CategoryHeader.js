import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CheckoutContext } from '../App';
import '../css/categoryHeader.css';

const CategoryHeader = (props) => {
    let context = useContext(CheckoutContext);
    const toggleNavLinks = () => {
        if (window.innerWidth < 768 && props.className === "nav-list") {
            return (
                <nav className={props.className}>
                    <Link to="/shoes"><h5 onClick={() => context.toggleMenu()} className='nav-links'>Shirts</h5></Link>
                    <Link to="/painting"><h5 onClick={() => context.toggleMenu()} className='nav-links'>Jacket + Sweaters</h5></Link>
                    <Link to="/accessories"><h5 onClick={() => context.toggleMenu()} className='nav-links'>Accessories</h5></Link>
                    <Link to="/support"><h5 onClick={() => context.toggleMenu()} className='nav-links'>Support</h5></Link>
                    <Link to="/aboutus"><h5 onClick={() => context.toggleMenu()} className='nav-links'>About Us</h5></Link>
                </nav>
            )
        } else {
            return (
                <nav className={props.className}>
                    <Link to="/shoes"><h5 className='nav-links'>Shirts</h5></Link>
                    <Link to="/painting"><h5 className='nav-links'>Jacket + Sweaters</h5></Link>
                    <Link to="/accessories"><h5 className='nav-links'>Accessories</h5></Link>
                    <Link to="/support"><h5 className='nav-links'>Support</h5></Link>
                    <Link to="/aboutus"><h5 className='nav-links'>About Us</h5></Link>
                </nav>
            )
        }
    }
    return toggleNavLinks();
}

export default CategoryHeader;
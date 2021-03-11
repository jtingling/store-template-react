import '../css/header.css';
import logo from "../assets/logo_transparent.png";
import { useContext } from 'react'
import { CheckoutContext } from '../App'
import { faRoad } from '@fortawesome/free-solid-svg-icons';
import CategoryHeader from './CategoryHeader'
const Header = (nav) => {
    const checkoutContext = useContext(CheckoutContext);
    return (
        <header className="header-template">
            <div className='collection-content'>
                <div className='header-content'>
                    <div className='nav-container'>
                        <div className='logo-container-header'>
                        </div>
                        <CategoryHeader className={"nav-header"}/>
                    </div>
                </div>
            </div>
            
        </header>
    )
}
export default Header;
import '../css/header.css';
import logo from "../assets/logo_transparent.png";
import { useContext } from 'react'
import { CheckoutContext } from '../App'
import { faRoad } from '@fortawesome/free-solid-svg-icons';

const Header = (nav) => {
    const checkoutContext = useContext(CheckoutContext);
    return (
        <header className="header-template">
            <div className='collection-content'>
                <div className='header-content'>
                    <div className='nav-container'>
                        <div className='logo-container-header'>
                            <img src={logo} alt='logo' className='logo' />
                        </div>
                        {checkoutContext.categoryHeader}
                    </div>
                </div>
            </div>
        </header>
    )
}

//TODO: Put nav-header in own component


export default Header;
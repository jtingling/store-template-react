import './header.css';
import logo from "../assets/logo_transparent.png";
import { Link } from 'react-router-dom';

const Header = (nav) => {

    return (
        <header className="header-template">
            <div className='collection-content'>
                <div className='header-content'>
                    <div className='nav-container'>
                        <div className='logo-container-header'>
                            <img src={logo} alt='logo' className='logo' />
                        </div>
                        <nav className='nav-header'>              
                                <Link to="/shirts"><h3 className='nav-links'>Shirts</h3></Link>
                                <Link to="/jacket+sweaters"><h3 className='nav-links'>Jacket + Sweaters</h3></Link>
                                <Link to="/accessories"><h3 className='nav-links'>Accessories</h3></Link>
                                <Link to="/support"><h3 className='nav-links'>Support</h3></Link>
                                <Link to="/aboutus"><h3 className='nav-links'>About Us</h3></Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;
import '../css/footer.css'
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faShopify } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Footer = (props) => {

    return (
        <div className='footer-container'>
            <footer>
                <div className='logo-container'>
                    <img src={logo} alt={logo} className='logo-footer'></img>
                </div>
                <div className='footer-text-container'>
                    <p className='footer-text'>
                        Bibisama is an Otaku clothing brand that blends the best of the culture and art style with unique
                        clothing designs you won't find anywhere else.
                            </p>
                </div>
                <div className='link-table'>
                    <div className='shop-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>SHOP</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link to="/">Landing</Link></td>
                                </tr>
                                <tr>
                                    <td><Link to="/shoes">Shirts</Link></td>
                                </tr>
                                <tr>
                                    <td><Link to="/painting">Jacket + Sweaters</Link></td>
                                </tr>
                                <tr>
                                    <td><Link to="/accessories">Accessories</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='store-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>BIBISAMA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link to="support">Support</Link></td>
                                </tr>
                                <tr>
                                    <td><Link to="aboutus">About Us</Link></td>
                                </tr>
                                <tr>
                                    {props.checkout.cart.lineItems.length !== 0 ? <td><Link to="/cart">Cart</Link></td> : <td>Empty Cart</td>}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='social-media-container'>
                    <div className='social-media'><FontAwesomeIcon icon={faInstagram} /></div>
                    <div className='social-media'><FontAwesomeIcon icon={faFacebook} /></div>
                    <div className='social-media'><FontAwesomeIcon icon={faTwitter} /></div>
                    <div className='social-media'><FontAwesomeIcon icon={faShopify} /></div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;

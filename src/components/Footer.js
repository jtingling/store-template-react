import './footer.css'
import { useState, useRef, useEffect, useContext } from 'react';
import logo from "../assets/logo_transparent.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faShopify } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import { CheckoutContext } from '../App'

const Footer = (props) => {
    const checkout = useContext(CheckoutContext);

    return (
        <div className='footer-container'>
            <footer>
                <div>
                    <div className='footer-about'>
                        <div className='logo-container'>
                            <img src={logo} alt={logo} className='logo-footer'></img>
                        </div>
                        <div className='footer-text-container'>
                            <p className='footer-text'>
                                Bibisama is an Otaku clothing brand that blends the best of the culture and art style with unique
                                clothing designs you won't find anywhere else.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='link-table'>
                    <div className='shop-table'>
                        <table>
                            <tr>
                                <th>SHOP</th>
                            </tr>
                            <tr>
                                <td>Landing</td>
                            </tr>
                            <tr>
                                <Link to="/shirts"><td>Shirts</td></Link>
                            </tr>
                            <tr>
                                <Link to="/jacket+sweaters"><td>Jacket + Sweaters</td></Link>
                            </tr>
                            <tr>
                                <Link to="/accessories"><td>Accessories</td></Link>
                            </tr>
                            <tr>
                                <td>Search</td>
                            </tr>
                        </table>
                    </div>
                    <div className='store-table'>
                        <table>
                            <tr>

                                <th>BIBISAMA</th>
                            </tr>
                            <tr>
                                <Link to="support"><td>Support</td></Link>
                            </tr>
                            <tr>
                                <Link to="aboutus"><td>About Us</td></Link>
                            </tr>
                            <tr>
                                <td>Store Policies</td>
                            </tr>
                            <tr>
                                {props.checkout.cart.lineItems.length !== 0 ? <td><Link to="/cart">Cart</Link></td> : <td>Empty Cart</td> }
                            </tr>
                            <tr>
                                <td>SiteMap</td>
                            </tr>
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

//TODO: Finish Footer component
//TODO: Search function
//TODO: React Router
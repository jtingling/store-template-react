import './footer.css'
import { useState, useRef, useEffect } from 'react';
import logo from "../assets/logo_transparent.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faShopify } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

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
                                <td>Shirts</td>
                            </tr>
                            <tr>
                                <td>Jacket + Sweaters</td>
                            </tr>
                            <tr>
                                <td>Accessories</td>
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
                                <td>Support</td>
                            </tr>
                            <tr>
                                <td>About Us</td>
                            </tr>
                            <tr>
                                <td>Store Policies</td>
                            </tr>
                            <tr>
                                <td>Upcoming Events</td>
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
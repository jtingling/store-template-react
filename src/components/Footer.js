import './footer.css'
import logo from "../assets/logo_transparent.png"

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
                                clothing designs you won't find anywhere else.<br/><br/>
                                <span id='email'>Contact Us: engo@bibisama.com</span><br/><br/>
                                <span id='copyright'>© 2021 Bibisama Apparel Powered by Japanese Streetwear</span>
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
                <div className='social-media'>
                    <ul className='inline-list'>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;

//TODO: Finish Footer component
//TODO: Search function
//TODO: React Router
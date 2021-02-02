import './footer.css'

const Footer = () => {

    return (
        <footer className='footer-container'>
            <div>
                <p>
                    Bibisama is an Otaku clothing brand that blends the best of the culture and art style with unique clothing designs you won't find anywhere else.
                    engo@bibisama.com
                    © 2021 Bibisama Apparel Powered by Japanese Streetwear
                </p>
            </div>
            <div className='link-table'>
                <table>
                    <tr>
                        <th>SHOP</th>
                        <th>BIBISAMA</th>
                    </tr>
                    <tr>
                        <td>Landing</td>
                        <td>Support</td>
                    </tr>
                    <tr>
                        <td>Shirts</td>
                        <td>About Us</td>
                    </tr>
                    <tr>
                        <td>Jacket + Sweaters</td>
                        <td>Store Policies</td>
                    </tr>
                    <tr>
                        <td>Accessories</td>
                        <td>Upcoming Events</td>
                    </tr>
                    <tr>
                        <td>Search</td>
                        <td>SiteMap</td>
                    </tr>
                </table>
            </div>
            <div className='social-media'>
                <ul className='inline-list'>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
import './header.css';
import logo from "../assets/logo_transparent.png"
const Header = () => {

    return (
        <header className="header-template">
            <div className='collection-content'>
                <div className='header-content'>
                    <div className='nav-container'>
                        <div className='logo-container'>
                            <img src={logo} alt='logo' className='logo'/>
                        </div>
                        <nav className='nav-header'>
                            <h3 className='nav-links'>Shirts</h3>
                            <h3 className='nav-links'>Jacket + Sweaters</h3>
                            <h3 className='nav-links'>Accessories</h3>
                            <h3 className='nav-links'>Support</h3>
                            <h3 className='nav-links'>About Us</h3>
                        </nav>
                    </div>
                    <div className='category-info'>
                        <header className='section-header'>
                            <h1 className='section-title'>Shirts</h1>
                            <div>
                                <div>
                                    <h3>ORIGINAL JAPANESE ANIME SHIRTS</h3>
                                    <p className='category-description'>
                                        These graphic shirts aren’t mass-produced designs you can find 
                                        just anywhere. At Bibisama, we make our own original Japanese 
                                        anime inspired t-shirts. Here, you’ll find officially licensed 
                                        fanwear from your favorite TV shows and custom artwork for manga lovers.
                                    </p>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;
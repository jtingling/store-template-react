import '../css/categoryheader.css'
import { Link } from 'react-router-dom';

const CategoryHeader = (props) => {

    return (
        <nav className='nav-header'>
            <Link to="/shoes"><h3 className='nav-links'>Shirts</h3></Link>
            <Link to="/painting"><h3 className='nav-links'>Jacket + Sweaters</h3></Link>
            <Link to="/accessories"><h3 className='nav-links'>Accessories</h3></Link>
            <Link to="/support"><h3 className='nav-links'>Support</h3></Link>
            <Link to="/aboutus"><h3 className='nav-links'>About Us</h3></Link>
        </nav>
    )
}

export default CategoryHeader;
import { Link } from 'react-router-dom';

const CategoryHeader = (props) => {
    return (
        <nav className={props.className}>
            <Link to="/shoes"><h5 className='nav-links'>Shirts</h5></Link>
            <Link to="/painting"><h5 className='nav-links'>Jacket + Sweaters</h5></Link>
            <Link to="/accessories"><h5 className='nav-links'>Accessories</h5></Link>
            <Link to="/support"><h5 className='nav-links'>Support</h5></Link>
            <Link to="/aboutus"><h5 className='nav-links'>About Us</h5></Link>
        </nav>
    )
}

export default CategoryHeader;
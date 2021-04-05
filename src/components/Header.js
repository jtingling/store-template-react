import stickyHeader from './Utilities/scrollableHeader';
import { useState, useEffect } from 'react'
import CategoryHeader from './CategoryHeader'
import '../css/header.css'
const Header = (props) => {
    const [headerImage, setHeaderImage] = useState(null);

    useEffect(()=>{
        setHeaderImage(props.header.imageUrl);
    }, [props.header.imageUrl])
    useEffect(()=>{
        stickyHeader('nav-other');
    }, [])
    return (
        <header className="header-template" style={{ backgroundImage: `url(${headerImage})`}}>
            <div className='header-text-container'>
                <div className='header-content'>
                    <div className='nav-container'>
                        <CategoryHeader className={"nav-other"} />
                    </div>
                    <h1 className="header-title">{props.header.title}</h1>
                </div>
            </div>
            
        </header>
    )
}
export default Header;

import { useState, useContext, useEffect } from 'react'
import { faRoad } from '@fortawesome/free-solid-svg-icons';
import CategoryHeader from './CategoryHeader'
import '../css/header.css'
const Header = (props) => {
    const [headerImage, setHeaderImage] = useState(null);

    useEffect(()=>{
        setHeaderImage(props.header.imageUrl);
    }, [props.header.imageUrl])
    return (
        <header id="header-template" style={{ backgroundImage: `url(${headerImage})`}}>

            <div className='header-text-container'>
                <h1>{props.header.title}</h1>
                <div className='header-content'>
                    <div className='nav-container'>
                        <CategoryHeader className={"nav-header"} />
                    </div>
                </div>
            </div>
            
        </header>
    )
}
export default Header;
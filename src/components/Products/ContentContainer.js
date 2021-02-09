import './content-container.css'
import AboutUs from '../AboutUs'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom'

const ContentContainer = (props) => {
    let content;
    if (props){}
    
    <Switch>
        <Route path="/AboutUs">
            content = <AboutUs></AboutUs>
        </Route>
    </Switch>
    return (
        <>
            <div className='location'>
                {props.navigation}
            </div>
            <div className='category-text'>
                <p>{props.catagoryText}</p>
            </div>
            <div className='product-container'>
                {content}
            </div>
        </>
    )
}

export default ContentContainer; 
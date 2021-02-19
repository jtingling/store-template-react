import './page-navigation.css'
import {  useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { queryOptions } from '../../ShopifyAPI/queries';

export const PageNavigation = (props) => {
    const [pageNumber, setPageNumber] = useState(1);

    const incrementPage = (addOne) => {
        props.page("after");
        const totalProducts = Math.ceil(props.numProducts/queryOptions.nProducts);
        if (pageNumber >= totalProducts) {
            setPageNumber(totalProducts);
        } else if (pageNumber <= totalProducts && pageNumber > 0) {
            setPageNumber(pageNumber + addOne)
        } 
    }

    const decrementPage = (removeOne) => {
        props.page("before");
        const totalProducts = Math.ceil(props.numProducts/queryOptions.nProducts);
        if (pageNumber === 1) {
            setPageNumber(1)
        } else if (pageNumber <= totalProducts && pageNumber > 0) {
            setPageNumber(pageNumber - removeOne)
        }
    }
    return (
        <nav>
            <FontAwesomeIcon 
                icon={faAngleLeft}
                className='left-chevron'
                onClick={() => decrementPage(1) }
            />
            <p>
            {
                props.pageRange(props.numProducts).map((page, idx)=>{
                    return <span key={idx} className={pageNumber === page ? "highlight" : "no-highlight"}>{page}</span>
                })
            }
            </p>
            <FontAwesomeIcon 
                icon={faAngleRight}
                className='right-chevron'
                onClick={()=> incrementPage(1)}/>
        </nav>

    )

}

export default PageNavigation;
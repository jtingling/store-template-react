import '../../css/page-navigation.css';
import { useState, useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { queryOptions } from '../../ShopifyAPI/queries';
import { CheckoutContext } from '../../App';

export const PageNavigation = (props) => {
    const [pageNumber, setPageNumber] = useState(1);
    const context = useContext(CheckoutContext);

    const incrementPage = (addOne) => {
        props.page("after");
        const totalProducts = Math.ceil(props.numProducts / queryOptions.nProducts);
        if (pageNumber >= totalProducts) {
            setPageNumber(totalProducts);
        } else if (pageNumber <= totalProducts && pageNumber > 0) {
            setPageNumber(pageNumber + addOne)
        }
    }

    const decrementPage = (removeOne) => {
        props.page("before");
        const totalProducts = Math.ceil(props.numProducts / queryOptions.nProducts);
        if (pageNumber === 1) {
            setPageNumber(1)
        } else if (pageNumber <= totalProducts && pageNumber > 0) {
            setPageNumber(pageNumber - removeOne)
        }
    }
    
    useEffect(()=>{
        context.scroll();
      }, [pageNumber])

    return (
        <div>
            <nav className='pagination-container'>
                <div className='tap-area' onClick={() => decrementPage(1)}>
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        className='left-chevron'
                    />
                </div>
                <p className="page-number">
                    {
                        props.pageRange(props.numProducts).map((page, idx) => {
                            return <span key={idx} className={pageNumber === page ? "highlight" : "no-highlight"}>{page}</span>
                        })
                    }
                </p>
                <div className='tap-area'>
                    <FontAwesomeIcon
                        icon={faAngleRight}
                        className='right-chevron'
                        onClick={() => incrementPage(1)} />
                </div>
            </nav>
        </div>
    )

}

export default PageNavigation;
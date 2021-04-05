import { useEffect, useState, useContext } from "react"
import { queryOptions } from '../../ShopifyAPI/queries'
import { getStoreData } from '../../ShopifyAPI/storefront-api'
import { query } from '../../ShopifyAPI/queries'
import { Link } from 'react-router-dom';
import PageNavigation from '../Utilities/PageNavigation'
import { setShopifyCursor } from '../Utilities/pagination'
import ProductCard from './ProductCard';
import { CheckoutContext } from '../../App'

const Shirts = (props) => {
    const NUM_SHIRTS = 23;
    const context = useContext(CheckoutContext);
    const [shirtData, setShirtData] = useState(false);
    const [cursor, setCursor] = useState({});

    const setPage = (position) => {
        setCursor(setShopifyCursor(position, shirtData));
    }

    const getPageRange = (nProducts) => {
        let numPages = Math.ceil(nProducts / queryOptions.nProducts);
        let pageCount = [];
        for (let n = numPages; n > 0; n--) {
            pageCount.unshift(n)
        }
        return pageCount;
    }
    useEffect(()=>{
        props.setHeader({
            title: "Shirts",
            text: {
              a: "...",
              b: "..."
            },
            link: <Link to='/aboutus'>Featured Product!</Link>,
            imageUrl: "https://cdn.shopify.com/s/files/1/0288/6926/3438/collections/Rudy_Bibisama_20_of_70_1728x.jpg?v=1592948932"
          })
    },[])

    useEffect(() => {
        try {
            console.log("Fetching product data...");
            getStoreData(query(...["first", undefined, undefined, "SHOES"])).then((queryData) => { setShirtData(queryData.data.products) })
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(() => {
        try {
            if (Object.keys(cursor)[0] === "before") {
                getStoreData(query("last", "before", cursor["before"], "SHOES")).then((queryData) => { setShirtData(queryData.data.products) })
            } else if (Object.keys(cursor)[0] === "after") {
                getStoreData(query("first", "after", cursor["after"], "SHOES")).then((queryData) => { setShirtData(queryData.data.products) })
            } else {
                throw new Error("Cursor unavailable.");
            }
        } catch (e) {
            console.log(e);
        }

    }, [cursor])

    if (!shirtData) {
        return <h1>Data not ready yet.</h1>
    } else {
        return (
            <>
                <p className='section-text'>
                    These Japanese streetwear clothing styles are perfect for men and women who want to make a statement. 
                    From playful to explosive designs, you can find something for any mood and occasion. Impress your friends with original anime shirts they’ve never seen, but definitely want!
                </p>
                <section className="shirt-section">
                    {
                        shirtData.edges.map((product) => {
                            return (
                                <ProductCard
                                    key={product.node.id}
                                    product={product.node}
                                    images={product.node.images} />
                            )
                        })
                    }
                </section>
                <div>
                    <PageNavigation page={setPage} pageRange={getPageRange} numProducts={NUM_SHIRTS} />
                </div>
            </>
        )
    }
}

export default Shirts
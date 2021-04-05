import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import PageNavigation from '../Utilities/PageNavigation'
import { setShopifyCursor } from '../Utilities/pagination'
import { queryOptions, query } from '../../ShopifyAPI/queries'
import { getStoreData } from '../../ShopifyAPI/storefront-api'
import ProductCard from './ProductCard';

const JacketSweaters = (props) => {
    const NUM_JacketSweaters = 10;
    const [jacketSweatersData, setjacketSweatersData] = useState(false);
    const [cursor, setCursor] = useState({});

    const setPage = (position) => {
        setCursor(setShopifyCursor(position, jacketSweatersData));
    }

    const getPageRange = (nProducts) => {
        let numPages = Math.ceil(nProducts / queryOptions.nProducts);
        let pageCount = [];
        for (let n = numPages; n > 0; n--) {
            pageCount.unshift(n)
        }
        return pageCount;
    }

    useEffect(() => {
        window.scroll(0, 0);
    })
    useEffect(()=>{
        props.setHeader({
            title: "Jackets & Sweaters",
            text: {
                a: "...",
                b: "..."
            },
            link: <Link to='/aboutus'>Featured Product!</Link>,
            imageUrl: "https://cdn.shopify.com/s/files/1/0288/6926/3438/collections/bombers1_1080x.png?v=1596623840"
          })
    },[])

    useEffect(() => {
        try {
            console.log("Fetching product data...");
            getStoreData(query(...["first", undefined, undefined, "PAINTING"])).then((queryData) => { setjacketSweatersData(queryData.data.products) })
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(() => {
        try {
            if (Object.keys(cursor)[0] === "before") {
                getStoreData(query("last", "before", cursor["before"], "PAINTING")).then((queryData) => { setjacketSweatersData(queryData.data.products) })
            } else if (Object.keys(cursor)[0] === "after") {
                getStoreData(query("first", "after", cursor["after"], "PAINTING")).then((queryData) => { setjacketSweatersData(queryData.data.products) })
            } else {
                throw "Cursor unavailable.";
            }
        } catch (e) {
            console.log(e);
        }
    }, [cursor])

    if (!jacketSweatersData) {
        return <h1>Data not ready yet.</h1>
    } else {
        return (
            <>
                <p className='section-text'>
                    We make all of our Japanese streetwear jackets, sweaters, and hoodies ourselves from quality materials that are rigorously tested for comfort and durability.
                    From the cotton types down to the zippers, we’ve selected only the best products to use in our anime bomber jackets and outerwear. These are trendy jackets you
                    can be proud to show off every day.
                </p>
                <section className="jacketSweaters-section">
                    {
                        jacketSweatersData.edges.map((product) => {
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
                    <PageNavigation page={setPage} pageRange={getPageRange} numProducts={NUM_JacketSweaters} />
                </div>
            </>
        )
    }
}

export default JacketSweaters
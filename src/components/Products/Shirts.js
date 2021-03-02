import { useEffect, useState } from "react"
import { Link, useLocation } from 'react-router-dom';

import PageNavigation from '../Utilities/PageNavigation'
import { setShopifyCursor } from '../Utilities/pagination'

import { queryOptions } from '../../ShopifyAPI/queries'
import { getStoreData } from '../../ShopifyAPI/storefront-api'
import { query } from '../../ShopifyAPI/queries'

import ProductCard from './ProductCard';

const Shirts = () => {
    const NUM_SHIRTS = 23;

    const [shirtData, setShirtData] = useState(false);
    const [cursor, setCursor] = useState({});
    let location = useLocation();

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
            <div>
                <section>
                    {
                        shirtData.edges.map((product) => {

                            return <Link
                                key={product.node.id}
                                to={{
                                    pathname: `/${shirtData.edges.type}/${product.node.handle}`,
                                    state: { background: location }
                                }}>
                                <ProductCard
                                    key={product.node.id}
                                    product={product.node}
                                    images={product.node.images} />
                            </Link>
                        })
                    }
                </section>
                <div>
                    <PageNavigation page={setPage} pageRange={getPageRange} numProducts={NUM_SHIRTS} />
                </div>
            </div>
        )
    }
}

export default Shirts
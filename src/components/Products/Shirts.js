import { useEffect, useState } from "react"
import { queryOptions } from '../../ShopifyAPI/queries'
import { getStoreData } from '../../ShopifyAPI/storefront-api'
import { query } from '../../ShopifyAPI/queries'

import PageNavigation from '../Utilities/PageNavigation'
import { setShopifyCursor } from '../Utilities/pagination'
import ProductCard from './ProductCard';

const Shirts = () => {
    const NUM_SHIRTS = 23;

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
                <section>
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
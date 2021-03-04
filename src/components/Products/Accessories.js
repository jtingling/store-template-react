import { useEffect, useState } from "react"

import PageNavigation from '../Utilities/PageNavigation'
import { setShopifyCursor } from '../Utilities/pagination'
import { queryOptions, query } from '../../ShopifyAPI/queries'
import { getStoreData } from '../../ShopifyAPI/storefront-api'

import ProductCard from './ProductCard';

const Accessories = () => {
    const NUM_ACCESSORIES = 6;
    const [accessoryData, setAccessoryData] = useState(false);
    const [cursor, setCursor] = useState({});

    const setPage = (position) => {
        setCursor(setShopifyCursor(position, accessoryData));
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
            getStoreData(query(...["first", undefined, undefined, "ACCESSORIES"])).then((queryData) => { setAccessoryData(queryData.data.products) })
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(() => {
        try {
            if (Object.keys(cursor)[0] === "before") {
                getStoreData(query("last", "before", cursor["before"], "ACCESSORIES")).then((queryData) => { setAccessoryData(queryData.data.products) })
            } else if (Object.keys(cursor)[0] === "after") {
                getStoreData(query("first", "after", cursor["after"], "ACCESSORIES")).then((queryData) => { setAccessoryData(queryData.data.products) })
            } else {
                throw "Loading...";
            }
        } catch (e) {
            console.log(e);
        }
    }, [cursor])
    if (!accessoryData) {
        return <h1>Data not ready yet.</h1>
    } else {
        return (
            <>
                <section>
                    {
                        accessoryData.edges.map((product) => {
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
                    <PageNavigation page={setPage} pageRange={getPageRange} numProducts={NUM_ACCESSORIES} />
                </div>
            </>
        )
    }
}

export default Accessories
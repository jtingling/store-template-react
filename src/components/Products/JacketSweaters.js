import { useEffect, useState } from "react"

import PageNavigation from '../Utilities/PageNavigation'
import { setShopifyCursor } from '../Utilities/pagination'
import { queryOptions, query } from '../../ShopifyAPI/queries'
import { getStoreData } from '../../ShopifyAPI/storefront-api'

import ProductCard from './ProductCard';

const JacketSweaters = () => {
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
                <section>
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
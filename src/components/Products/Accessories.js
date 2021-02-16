import { useEffect, useState } from "react"

import PageNavigation from '../Utilities/PageNavigation'

import { setShopifyCursor } from '../Utilities/pagination'
import {queryOptions} from '../../Storefront-API/queries'
import { getStoreData } from '../../Storefront-API/fetch'
import { mapToProductCard } from '../../App';
import { query } from '../../Storefront-API/queries'

const Accessories = () => {
    const NUM_ACCESSORIES = 6;
    const [accessoryData, setAccessoryData] = useState([]);
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

    useEffect(()=>{
        try{
            console.log("FETCH: requesting initial Accessory Data.")
            getStoreData(query(...["first", undefined, undefined, "ACCESSORIES"])).then((queryData) => { setAccessoryData(queryData.data.products)})
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(()=>{
        try{
            if (Object.keys(cursor)[0] === "before") {
                getStoreData(query("last", "before", cursor["before"], "ACCESSORIES")).then((queryData)=>{ setAccessoryData(queryData.data.products)})
            } else if (Object.keys(cursor)[0] === "after") {
                getStoreData(query("first", "after", cursor["after"], "ACCESSORIES")).then((queryData)=>{ setAccessoryData(queryData.data.products)})
            } else {
                throw "Cursor unavailable.";
            }
        } catch (e) {
            console.log(e);
        }
    }, [cursor])
    return (
        <div>
            <section>
                { mapToProductCard(accessoryData.edges) }
            </section>
            <div>
                {

                }
                <PageNavigation page={setPage} pageRange={getPageRange} numProducts={NUM_ACCESSORIES} />
            </div>
        </div>
    )
}

export default Accessories
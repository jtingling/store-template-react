import { useEffect, useState } from "react"

import PageNavigation from '../Utilities/PageNavigation'

import { setShopifyCursor } from '../Utilities/pagination'
import {queryOptions} from '../../ShopifyAPI/queries'
import { getStoreData } from '../../ShopifyAPI/storefront-api'
import  MapToProductCard  from './MapToProductCard';
import { query } from '../../ShopifyAPI/queries'

const Accessories = (props) => {
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
            props.client.product.fetchAll().then((products) => {
                // Do something with the products
                console.log(products);
            })
            console.log("Fetching product data...");
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
                throw "Loading...";
            }
        } catch (e) {
            console.log(e);
        }
    }, [cursor])
    return (
        <div>
            <section>
                <MapToProductCard type='accessories' data={accessoryData.edges}/>
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
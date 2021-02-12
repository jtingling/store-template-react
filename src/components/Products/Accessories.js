import { useEffect, useState } from "react"

import { setShopifyCursor } from '../Utilities/pagination'

import { getStoreData } from '../../Storefront-API/fetch'
import { mapToProductCard } from '../../App';
import { query } from '../../Storefront-API/queries'

const Accessories = () => {
    const [accessoryData, setAccessoryData] = useState([]);
    const [cursor, setCursor] = useState({});

    const setPage = (position) => {
        setCursor(setShopifyCursor(position, accessoryData));
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
                <button type='button' onClick={()=>{setPage("before")}}>previous</button><button type='button' onClick={ () => {setPage("after")}}>next</button>
            </div>
        </div>
    )
}

export default Accessories
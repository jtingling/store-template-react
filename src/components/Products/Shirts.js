import { useEffect, useState } from "react"

import { setShopifyCursor } from '../Utilities/pagination'

import { getStoreData } from '../../Storefront-API/fetch'
import { mapToProductCard } from '../../App';
import { query } from '../../Storefront-API/queries'

const Shirts = () => {
    const [shirtData, setShirtData] = useState([]);
    const [cursor, setCursor] = useState({});

    const setPage = (position) => {
        setCursor(setShopifyCursor(position, shirtData));
    }

    useEffect(()=>{
        try{
            console.log("FETCH: requesting initial Shirt Data.")
            getStoreData(query(...["first", undefined, undefined, "SHOES"])).then((queryData) => { setShirtData(queryData.data.products)})
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(()=>{
        try{
            if (Object.keys(cursor)[0] === "before") {
                getStoreData(query("last", "before", cursor["before"], "SHOES")).then((queryData)=>{ setShirtData(queryData.data.products)})
            } else if (Object.keys(cursor)[0] === "after") {
                getStoreData(query("first", "after", cursor["after"], "SHOES")).then((queryData)=>{ setShirtData(queryData.data.products)})
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
                {
                        mapToProductCard(shirtData.edges)
                }
            </section>
            <div>
                {

                }
                <button type='button' onClick={()=>{setPage("before")}}>previous</button><button type='button' onClick={ () => {setPage("after")}}>next</button>
            </div>
        </div>
    )
}

export default Shirts
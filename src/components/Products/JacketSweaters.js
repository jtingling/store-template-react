import { useEffect, useState } from "react"

import { setShopifyCursor } from '../Utilities/pagination'

import { getStoreData } from '../../Storefront-API/fetch'
import { mapToProductCard } from '../../App';
import { query } from '../../Storefront-API/queries'

const JacketSweaters = () => {
    const [jacketSweatersData, setjacketSweatersData] = useState([]);
    const [cursor, setCursor] = useState({});

    const setPage = (position) => {
        setCursor(setShopifyCursor(position, jacketSweatersData));
    }

    useEffect(()=>{
        try{
            console.log("FETCH: requesting initial Painting Data.")
            getStoreData(query(...["first", undefined, undefined, "PAINTING"])).then((queryData) => { setjacketSweatersData(queryData.data.products)})
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(()=>{
        try{
            if (Object.keys(cursor)[0] === "before") {
                getStoreData(query("last", "before", cursor["before"], "PAINTING")).then((queryData)=>{ setjacketSweatersData(queryData.data.products)})
            } else if (Object.keys(cursor)[0] === "after") {
                getStoreData(query("first", "after", cursor["after"], "PAINTING")).then((queryData)=>{ setjacketSweatersData(queryData.data.products)})
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
                { mapToProductCard(jacketSweatersData.edges) }
            </section>
            <div>
                {

                }
                <button type='button' onClick={()=>{setPage("before")}}>previous</button><button type='button' onClick={ () => {setPage("after")}}>next</button>
            </div>
        </div>
    )
}

export default JacketSweaters
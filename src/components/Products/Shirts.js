import { useEffect, useState } from "react"

import { getStoreData } from '../../Storefront-API/fetch'
import { mapToProductCard } from '../../App';
import { shirtQuery, afterShirtQuery } from '../../Storefront-API/queries'

const Shirts = () => {
    const [shirtData, setShirtData] = useState([]);
    const [cursor, setCursor] = useState({});

    const setPage = (position) => {
        let cursor = {};
        try{
            if (shirtData.pageInfo.hasNextPage && shirtData.pageInfo.hasPreviousPage) {
                if (position === "after") {
                    cursor["after"] = shirtData.edges[shirtData.edges.length - 1].cursor;
                } else if (position === "before") {
                    cursor["before"] = shirtData.edges[0].cursor;
                } else {
                    throw "Pagination error setting next cursor.";
                }
            } else if (shirtData.pageInfo.hasNextPage) {
                if (position === "after") {
                    cursor["after"] = shirtData.edges[shirtData.edges.length - 1].cursor;
                } else {
                    throw "Pagination error setting next cursor.";
                }
            } else if (shirtData.pageInfo.hasPreviousPage) {
                if (position === "before") {
                    cursor["before"] = shirtData.edges[0].cursor;
                } else {
                    throw "Pagination error setting previous cursor.";
                }
            } else {
                throw "PageInfo unavailable";
            }
            setCursor(cursor);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(()=>{
        try{
            console.log("FETCH: requesting initial Shirt Data.")
            getStoreData(shirtQuery).then((queryData) => { setShirtData(queryData.data.products)})
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(()=>{
        console.log(cursor)
        try{
            if (Object.keys(cursor)[0] === "before") {
                getStoreData(afterShirtQuery("last", "before", cursor["before"])).then((queryData)=>{ setShirtData(queryData.data.products)})
            } else if (Object.keys(cursor)[0] === "after") {
                getStoreData(afterShirtQuery("first", "after", cursor["after"])).then((queryData)=>{ setShirtData(queryData.data.products)})
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
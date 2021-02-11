import { useEffect, useState } from "react"

import { fetchProducts } from '../../Storefront-API/fetch'
import { mapToProductCard } from '../../App';
import { shirtQuery, afterShirtQuery } from '../../Storefront-API/queries'

const Shirts = () => {
    const [shirtData, setShirtData] = useState([]);
    const [cursor, setCursor] = useState(0);

    const nextPage = () => {
        setCursor(shirtData[shirtData.length - 1].cursor);
    }

    useEffect(()=>{
        console.log("FETCH: requesting initial Shirt Data.")
        fetchProducts(shirtQuery).then((response) => setShirtData(response[0]));
    }, [])

    useEffect(()=>{
        try {
            console.log("FETCH: requesting another page.")
            if (cursor) {
                fetchProducts(afterShirtQuery(cursor)).then((response) => setShirtData(response[0]));
            } else if (cursor === undefined) {
                throw "cursor undefined";
            }

        } catch (e) {
            console.log("Failed to fetch products: " + e );
        }
    }, [cursor])

    return (
        <div>
            <section>
                {
                    mapToProductCard(shirtData)
                }
            </section>
            <div>
                {

                }
                <button type='button'>previous</button><button type='button' onClick={ () => {nextPage()}}>next</button>
            </div>
        </div>
    )
}

export default Shirts
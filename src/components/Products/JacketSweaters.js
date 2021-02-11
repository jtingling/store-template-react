import { useEffect, useState } from "react"

import { fetchProducts } from '../../Storefront-API/fetch'
import { mapToProductCard } from '../../App';
import { paintingQuery } from '../../Storefront-API/queries'

const JacketSweaters = () => {
    const [paintingData, setPaintingData] = useState([]);
    useEffect(()=>{
        console.log("FETCH: requesting initial Painting Data.")
        fetchProducts(paintingQuery).then((response) => setPaintingData(response[0]));
    },[])
    return (
        <section>
            {
                mapToProductCard(paintingData)
            }
        </section>
    )
}

export default JacketSweaters
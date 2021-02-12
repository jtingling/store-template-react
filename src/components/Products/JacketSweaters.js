import { useEffect, useState } from "react"

import { getStoreData } from '../../Storefront-API/fetch'
import { mapToProductCard } from '../../App';
import { paintingQuery } from '../../Storefront-API/queries'

const JacketSweaters = () => {
    const [paintingData, setPaintingData] = useState([]);
    useEffect(()=>{
        console.log("FETCH: requesting initial Painting Data.")
        getStoreData(paintingQuery).then((response) => setPaintingData(response.data.products));
    },[])
    return (
        <section>
            {
                mapToProductCard(paintingData.edges)
            }
        </section>
    )
}

export default JacketSweaters
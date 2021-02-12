import { useEffect, useState } from "react"

import { getStoreData } from '../../Storefront-API/fetch'
import { mapToProductCard } from '../../App';
import { accessoryQuery } from '../../Storefront-API/queries'

const Accessories = () => {
    const [accessoryData, setAccessoryData] = useState([]);

    useEffect(()=>{
        console.log("FETCH: requesting initial Accessory Data.")
        getStoreData(accessoryQuery).then((response) => setAccessoryData(response.data.products));
    },[])

    return (
        <section>
            {
                mapToProductCard(accessoryData.edges)
            }
        </section>
    )
}

export default Accessories
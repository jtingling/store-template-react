import { useEffect, useState } from "react"

import { fetchProducts } from '../../Storefront-API/fetch'
import { mapToProductCard } from '../../App';
import { accessoryQuery } from '../../Storefront-API/queries'

const Accessories = () => {
    const [accessoryData, setAccessoryData] = useState([]);
    useEffect(()=>{
        console.log("FETCH: requesting initial Accessory Data.")
        fetchProducts(accessoryQuery).then((response) => setAccessoryData(response[0]));
    },[])
    return (
        <section>
            {
                mapToProductCard(accessoryData)
            }
        </section>
    )
}

export default Accessories
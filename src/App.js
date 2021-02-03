import './App.css';

import { getStoreProducts } from './Storefront-API/fetch'
import ProductCard from './components/Products/ProductCard'
import ProductArea from './components/Products/ProductArea';
import Header from './components/Header';
import Footer from './components/Footer'
import { useState, useEffect } from 'react';

function App() {
  const [storeData, setStoreData] = useState([]);

  const fetchProducts = async () => {
    try {
      let result = await getStoreProducts();
      return [result.data.products.edges];
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts().then((response) => setStoreData(response[0]));
  }, [])
  
  if (storeData === undefined) {
    return <h1>No Data</h1>
  } else {
    return (
      <>
          <Header/>
          <ProductArea merchandise={
            storeData.map((product) => {
              return <ProductCard 
                key={product.node.id} 
                product={product.node} 
                images={product.node.images}/>
            })

          }
          navigation={<p>Home > Shirts</p>}/>
          <Footer/>
      </>
    )
  }
}

export default App;

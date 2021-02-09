import './App.css';

import { shirtQuery, accessoryQuery, paintingQuery } from './Storefront-API/queries'
import { getStoreProducts } from './Storefront-API/fetch'
import ProductCard from './components/Products/ProductCard'
import ContentContainer from './components/Products/ContentContainer';
import Header from './components/Header';
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Support from './components/Support'
import Shirts from './components/Products/Shirts'
import Accessories from './components/Products/Accessories'
import JacketSweaters from './components/Products/JacketSweaters'
import ProductDetail from './components/Products/ProductDetail'


import { Link, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [shirtData, setShirtData] = useState([]);
  const [accessoryData, setAccessoryData] = useState([]);
  const [paintingData, setPaintingData] = useState([]);

  const fetchProducts = async (searchQuery) => {
    try {
      let result = await getStoreProducts(searchQuery);
      return [result.data.products.edges];
    } catch (error) {
      console.log(error);
    }
  }

  const getProductType = () => {
    return shirtData[0].node.productType;
  }

  const mapToProductCard = (data) => {
    return data.map((product) => {
      return <ProductCard
        key={product.node.id}
        product={product.node}
        images={product.node.images} />
    })

  }

  useEffect(() => {
    fetchProducts(paintingQuery).then((response) => setPaintingData(response[0]));
    fetchProducts(shirtQuery).then((response) => setShirtData(response[0]));
    fetchProducts(accessoryQuery).then((response) => setAccessoryData(response[0]));
  }, [])
  console.log(paintingData)
  console.log(accessoryData)
  if (shirtData === undefined) {
    return <h1>No Data</h1>
  } else {
    return (
      <>
        <Header currentMenu={"ACCESSORIES"} />
        <Switch>
          <Route path='/aboutus'>
            <AboutUs/>
          </Route>
            <Route path='/support'>
              <Support/>
            </Route>
            <Route path='/jacket+sweaters'>
              <JacketSweaters data={mapToProductCard(paintingData)}/>
            </Route>
            <Route path='/accessories'>
              <Accessories data={mapToProductCard(accessoryData)}/>
            </Route>
            <Route path='/shirts'>
              <Shirts data={mapToProductCard(shirtData)}/>
            </Route>
        </Switch>
        <Footer />
      </>

    )
  }
}

export default App;

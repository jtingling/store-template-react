import './App.css';
import { domain, storeToken } from './ShopifyAPI/store-access'

import { useState } from 'react';
import Client from 'shopify-buy';
import { Switch, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Support from './components/Support';
import Shirts from './components/Products/Shirts';
import Accessories from './components/Products/Accessories';
import JacketSweaters from './components/Products/JacketSweaters';
import ProductDetailModal from './components/Products/ProductDetailModal';
import { useEffect } from 'react';

const App = () => {
  let state = {
    isCartOpen: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {}
  };
  let location = useLocation();
  let background = location.state && location.state.background;
  const [checkout, setCheckout] = useState();
  const [products, setProducts] = useState();
  const [storeData, setStoreData] = useState(state);



  const client = Client.buildClient({
    domain: domain,
    storefrontAccessToken: storeToken
  });

  useEffect(() => {
    try {
      client.checkout.create().then((checkout) => {
        setCheckout(checkout);
      })
      client.product.fetchAll(5).then(res => setStoreData({
        isCartOpen: false,
        checkout: storeData.checkout,
        products: res,
        shop: {}
      }))} 
      catch (e) {
        console.log(e);
    }
  }, [])

  return (
    <>
    {console.log(storeData)}
      <Header currentMenu={"ACCESSORIES"} />
      <Switch location={background || location}>
        <Route path='/aboutus'>
          <AboutUs />
        </Route>
        <Route path='/support'>
          <Support />
        </Route>
        <Route path='/jacket+sweaters'>
          <JacketSweaters client={client} />
        </Route>
        <Route path='/accessories'>
          <Accessories client={client} />
        </Route>
        <Route path='/shirts'>
          <Shirts client={client} />
        </Route>
      </Switch>
      <Footer />
      { background && <Route path='/shirts/:product' children={<ProductDetailModal client={client} checkout={checkout} />} />}
    </>

  )
}
//TODO: Product Modal window
//TODO: Breadcrumbs
//TODO: Static Pages (Styling)
//TODO: Cart and Checkout
export default App;

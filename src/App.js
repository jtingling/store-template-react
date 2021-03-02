import './App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation } from 'react-router-dom';

import { client } from './ShopifyAPI/client'

import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Support from './components/Support';
import Cart from './components/Cart';

import Shirts from './components/Products/Shirts';
import Accessories from './components/Products/Accessories';
import JacketSweaters from './components/Products/JacketSweaters';
import ProductDetailModal from './components/Products/ProductDetailModal';

export const CheckoutContext = React.createContext();

const App = () => {
  let location = useLocation();
  let background = location.state && location.state.background;
  const [checkout, setCheckout] = useState({
    id: '', 
    webUrl: '',
    cart: { lineItems: [] }
  });

  const addToCart = (quantity, variantId) => {
    const itemsToAdd = {
      variantId: variantId,
      quantity: quantity,
    }
    client.checkout.addLineItems(checkout.id, itemsToAdd)
      .then(checkout => { setCheckout({
        id: checkout.id, 
        webUrl: checkout.webUrl,
        cart: {
          lineItems: checkout.lineItems,
          subTotal: 0
        }
      }) 
    })
  }

  const deleteItem = (lineItemId) => {
    const checkoutId = checkout.id;
    try {
        client.checkout.removeLineItems(checkoutId, lineItemId).then( checkout => setCheckout({
          id: checkout.id, 
          webUrl: checkout.webUrl,
          cart: {
            lineItems: checkout.lineItems,
            subTotal: 0
          }
        }))
            .catch(e => console.log(e))
    } catch(e) {
        console.log(e);
    }
  }

  const updateQuantity = (event, lineItem) => {
    console.log(lineItem.id === checkout.cart.lineItems[0].id)
    const updateLineItem = [{
        id: lineItem.id,
        quantity: parseInt(event.target.value, 10)
    }]
    client.checkout.updateLineItems(checkout.id, updateLineItem)
        .then( res => setCheckout({
          id: res.id, 
          webUrl: res.webUrl,
          cart: {
            lineItems: res.lineItems,
            subTotal: 0
          }
        }))
        .catch(e => console.log(e))
  }

  const getCheckoutData = () => {
    client.checkout.fetch(checkout.id).then(res => setCheckout({
      id: res.id,
      webUrl: res.webUrl,
      cart: {
        lineItems: res.lineItems,
        subTotal: 0
      }
    }))
  }

  const buyNow = async (variantId) => {
    let newCheckoutId;
    await client.checkout.create().then((checkout) => {
      newCheckoutId = checkout.id;
    })
    const itemsToAdd = {
      variantId: variantId,
      quantity: 1,
    }
    client.checkout.addLineItems(newCheckoutId, itemsToAdd)
      .then((checkout) => window.location.replace(checkout.webUrl));
  }

  const openCheckout = () => {
    window.location.replace(checkout.webUrl);
  }

  useEffect(()=>{
    console.log(checkout)
  })

  useEffect(() => {
    const initCheckout = async () => {
      try {
        await client.checkout.create().then((checkout) => {
          setCheckout({
            id: checkout.id, 
            webUrl: checkout.webUrl,
            cart: {
              lineItems: checkout.lineItems,
              subTotal: 0
            }
          })
        })
      }
      catch (e) {
        console.log(e);
      }
    }
    initCheckout();
  }, [])

  if (checkout === undefined) {
    return <h1>Loading...</h1>
  } else {
    return (
      <CheckoutContext.Provider value={{ 
        addItemToCart: addToCart, 
        buySingleItem: buyNow, 
        openCheckout: openCheckout,
        deleteItem: deleteItem,
        updateQuantity: updateQuantity }}>
        <Header />
        <Switch location={background || location}>
          <Route path='/aboutus'>
            <AboutUs />
          </Route>
          <Route path='/support'>
            <Support />
          </Route>
          <Route path='/jacket+sweaters'>
            <JacketSweaters />
          </Route>
          <Route path='/accessories'>
            <Accessories />
          </Route>
          <Route path='/shirts'>
            <Shirts />
          </Route>
          <Route path='/cart'>
            <Cart checkout={checkout} setCheckout={setCheckout} />
          </Route>
        </Switch>
        <Footer checkout={checkout}/>
        {background && <Route path='/shirts/:product' children={<ProductDetailModal />} />}
      </CheckoutContext.Provider>

    )

  }
}
//TODO: Product Modal window
//TODO: Breadcrumbs
//TODO: Static Pages (Styling)
//TODO: Cart and Checkout
export default App;

import './css/app.css'
import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation, Link } from 'react-router-dom';

import { client } from './ShopifyAPI/client'

import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Support from './components/Support';
import Cart from './components/Cart';
import Landing from './components/Landing';
import Shirts from './components/Products/Shirts';
import Accessories from './components/Products/Accessories';
import JacketSweaters from './components/Products/JacketSweaters';
import ProductDetailModal from './components/Products/ProductDetailModal';
import CategoryHeader from './components/CategoryHeader'
import Menu from './components/Menu';

export const CheckoutContext = React.createContext();

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkout, setCheckout] = useState({
    id: '',
    webUrl: '',
    cart: {
      lineItems: [],
      subTotal: 0,
      quantity: 0
    }
  });
  const [headerData, setHeaderData] = useState({
    imageUrl: "https://cdn.shopify.com/s/files/1/0288/6926/3438/files/IMG_7907_3024x.JPG?v=1593068622"
  })
    let location = useLocation();

  const toggleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);

  }

  const addToCart = (quantity, variantId) => {
    const itemsToAdd = {
      variantId: variantId,
      quantity: quantity
    }
    client.checkout.addLineItems(checkout.id, itemsToAdd).then(res => {
      setCheckout({
        id: res.id,
        webUrl: res.webUrl,
        cart: {
          lineItems: res.lineItems,
          subTotal: res.lineItemsSubtotalPrice.amount,
          quantity: getCartQuantity()
        }
      })
    })
  }

  const deleteItem = (lineItemId) => {
    const checkoutId = checkout.id;
    try {
      client.checkout.removeLineItems(checkoutId, lineItemId).then(res => setCheckout({
        id: res.id,
        webUrl: res.webUrl,
        cart: {
          lineItems: res.lineItems,
          subTotal: res.lineItemsSubtotalPrice.amount,
          quantity: getCartQuantity()
        }
      }))
        .catch(e => console.log(e))
    } catch (e) {
      console.log(e);
    }
  }

  const updateQuantity = async (event, lineItem) => {
    const updateLineItem = [{
      id: lineItem.id,
      quantity: parseInt(event.target.value, 10)
    }]
    await client.checkout.updateLineItems(checkout.id, updateLineItem).then(res => setCheckout({
      id: res.id,
      webUrl: res.webUrl,
      cart: {
        lineItems: res.lineItems,
        subTotal: res.lineItemsSubtotalPrice.amount,
        quantity: getCartQuantity()
      }
    }))
      .catch(e => console.log(e))
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

  const getCartQuantity = async () => {
    let cartId = window.localStorage.getItem('cart');
    let quantity = 0;
    await client.checkout.fetch(cartId).then(res => {
      res.lineItems.map((item) => {
        return quantity += item.quantity;
      })
    });
    return quantity;
  }

  useEffect(() => {
    let persistCartId = window.localStorage;
    const initCheckout = async () => {
      let cartId = persistCartId.getItem('cart');
      try {
        if (cartId === null) {
          client.checkout.create().then((checkout) => {
            persistCartId.setItem('cart', `${checkout.id}`);
            setCheckout({
              id: checkout.id,
              webUrl: checkout.webUrl,
              cart: {
                lineItems: checkout.lineItems,
                subTotal: checkout.lineItemsSubtotalPrice.amount,
                quantity: 0
              }
            });
          })
        } else {
          let totalQuantity = 0;
          client.checkout.fetch(cartId).then((checkout) => {
            checkout.lineItems.map((item) => {
              return totalQuantity += item.quantity
            })
            setCheckout({
              id: persistCartId.getItem("cart"),
              webUrl: checkout.webUrl,
              cart: {
                lineItems: checkout.lineItems,
                subTotal: checkout.lineItemsSubtotalPrice.amount,
                quantity: totalQuantity
              }
            })
          })
            .catch(e => console.log(e))
        }
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
        updateQuantity: updateQuantity,
        quantity: getCartQuantity(),
        toggleMenu: toggleMenu,
        isOpen: isOpen,
        setIsOpen: setIsOpen
      }}>
        {
          location.pathname === "/painting" || location.pathname === "/accessories" || location.pathname === '/shoes'   ? <Header location={location} header={headerData}/> : <CategoryHeader className={"nav-other"}/> 
        }
        <Switch location={location}>
          <Route path='/' exact><Landing setHeader={setHeaderData} header={headerData}/></Route>
          <Route path='/aboutus'><AboutUs setHeader={setHeaderData}/></Route>
          <Route path='/support'><Support setHeader={setHeaderData}/></Route>
          <Route path='/painting' location={location} ><JacketSweaters setHeader={setHeaderData} /></Route>
          <Route path='/accessories' location={location} ><Accessories setHeader={setHeaderData} /></Route>
          <Route path='/shoes' location={location} ><Shirts setHeader={setHeaderData} /></Route>
          <Route path='/cart'><Cart checkout={checkout} location={location} /></Route>
          <Route path='/:product'><ProductDetailModal location={location} /></Route>
        </Switch>
        <Footer checkout={checkout} />
        {console.log(isOpen)}
        {
          isOpen && location.pathname !== "/cart" ? <CategoryHeader isOpen={isOpen} className={"nav-list"} /> : <></>
        }
        {
          location.pathname === "/cart" ? <></> : <Menu checkout={checkout} location={location} />
        }
      </CheckoutContext.Provider>
    )
  }
}

export default App;

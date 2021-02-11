import './App.css';

import ProductCard from './components/Products/ProductCard'
import Header from './components/Header';
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Support from './components/Support'
import Shirts from './components/Products/Shirts'
import Accessories from './components/Products/Accessories'
import JacketSweaters from './components/Products/JacketSweaters'

import { Switch, Route } from 'react-router-dom';

export const mapToProductCard = (data) => {
  return data.map((product) => {
    return <ProductCard
      key={product.node.id}
      product={product.node}
      images={product.node.images} />
  })
}

const App = () => {

  return (
    <>
      <Header currentMenu={"ACCESSORIES"} />
      <Switch>
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
      </Switch>
      <Footer />
    </>

  )
}

export default App;

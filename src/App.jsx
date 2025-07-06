import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from './components/Layout/Layout'
import Home from './components/Pages/Home'
import Info from './components/Pages/Info'
import Error404 from './components/Pages/Error404'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetail from "./components/ItemDetailContainer/ItemDetail"

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Products from "./components/Pages/Products"
import Cart from "./components/Cart/Cart"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="products/:id" element={<ItemDetail />} />
            {/* <Route path="product/:productId" element={<ItemDetailContainer />} /> */}
            {/* <Route path="checkout" element={<CheckoutForm />} /> */}
            <Route path="info" element={<Info />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<Error404 />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

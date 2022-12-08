import {Routes, Route} from 'react-router-dom';

import React from 'react';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Router = () => {
  return (
    <Routes>
      <Route path='home' element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='shop/:id' element={<Shop/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='checkout' element={<Login/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path=''/>
    </Routes>
  )
}

export default Router

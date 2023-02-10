import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'

import RequireAuth from '../../components/RequireAuth'
import ScrollToTop from '../../components/ScrollToTop'
import ProductDetail from '../../pages/ProductDetail'
import MyProduct from '../../pages/MyProduct'
import Logout from '../../components/Logout'
import Register from '../../pages/Register'
import Counter from '../../pages/Counter'
import Profile from '../../pages/Profile'
import Page404 from '../../pages/Page404'
import Login from '../../pages/Login'
import Home from '../../pages/Home'

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace="true" />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/seller/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="/seller/my-product" element={<RequireAuth><MyProduct /></RequireAuth>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
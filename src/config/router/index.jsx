import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Logout from '../../components/Logout'
import RequireAuth from '../../components/RequireAuth'
import ScrollToTop from '../../components/ScrollToTop'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import MyProduct from '../../pages/MyProduct'
import Page404 from '../../pages/Page404'
import ProductDetail from '../../pages/ProductDetail'
import Profile from '../../pages/Profile'
import Register from '../../pages/Register'

const Router = () => {
  const handleLogout = () =>{
    localStorage.removeItem("token")
  }

  return (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Navigate to="/" replace="true"/>} />
          <Route path="/products/:id" element={<ProductDetail/>} /> 
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/seller/profile" element={<RequireAuth><Profile/></RequireAuth>} />
          <Route path="/seller/my-product" element={<RequireAuth><MyProduct/></RequireAuth>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="*" element={<Page404/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default Router
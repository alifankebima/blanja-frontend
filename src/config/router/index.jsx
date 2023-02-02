import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from '../../components/ScrollToTop'
import Home from '../../pages/Home'
import Page404 from '../../pages/Page404'
import ProductDetail from '../../pages/ProductDetail'

const Router = () => {
  return (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Navigate to="/" replace="true"/>} />
          <Route path="/product/:id" element={<ProductDetail/>} /> 
          <Route path="*" element={<Page404/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default Router
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route exact path='/products/:id' element={<ProductDetail />} />
            <Route exact path='/cart' element={<ShoppingCart />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    )
}

export default AppRoutes;
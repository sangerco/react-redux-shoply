import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact="true" path="/" element={<ProductList />} />
            <Route exact="true" path='/products/:id' element={<ProductDetail />} />
            <Route exact="true" path='/cart' element={<ShoppingCart />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    )
}

export default AppRoutes;
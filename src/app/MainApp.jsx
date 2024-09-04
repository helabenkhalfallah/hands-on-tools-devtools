import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ProductDetailsPage from '../features/products/pages/ProductDetailsPage.jsx';
import ProductListPage from '../features/products/pages/ProductListPage.jsx';

// TODO: lazy
const MainApp = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/products" element={<ProductListPage />} />
                <Route path="/product-details/:id" element={<ProductDetailsPage />} />
            </Routes>
        </Router>
    );
};

export default MainApp;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; 

import reportWebVitals from './reportWebVitals';
import Navigation from './components1/Navigation/Navigation';
import Home from './components1/pages/Home/Home/Home';
import Catalog from './components1/pages/Catalog/Catalog/Catalog';
import Footer from './components1/footer/Footer';
import ProductPage from './components1/pages/Catalog/CarPage/ProductPage/ProductPage';
import CartPage from './components1/pages/Cart/CartPage/Cart';
import { Provider } from 'react-redux';
import store from './components1/pages/Cart/Store/Store';
import Chekout from './components1/pages/Chekout/Chekout'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/Cart/catalog" element={<Catalog />} />
          <Route path="/Cart/Chekout/catalog" element={<Catalog />} />
          <Route path="/catalog/carPage" element={<ProductPage />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/Cart/Chekout" element={<Chekout />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import { CartItemsProvider } from './contexts/CartItems.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartItemsProvider>
            <App />
          </CartItemsProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();

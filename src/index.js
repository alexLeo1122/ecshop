import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
// import { CartItemsProvider } from './contexts/CartItems.context';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store/store';
import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

  <Provider store = {store}>

    <BrowserRouter>
      {/* <UserProvider> */}
        {/* <ProductsProvider> */}
          {/* <CartItemsProvider> */}
          <PersistGate loading={null} persistor={persistor}>
            <App />
            </PersistGate>
          {/* </CartItemsProvider> */}
        {/* </ProductsProvider> */}
      {/* </UserProvider> */}
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();

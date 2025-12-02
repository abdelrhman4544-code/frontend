import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { CartProvider } from './context/CartContext'; // <--- CHECK THIS IMPORT

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>  {/* <--- CHECK THIS WRAPPER */}
    <App />
  </CartProvider>
);
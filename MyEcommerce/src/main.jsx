import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '../db/firebase-config.js';
import { createRoot } from 'react-dom/client';
import products from '../products.js';

ReactDOM.createRoot(document.getElementById('root')).render( 

  <React.StrictMode>
    <App />
  </React.StrictMode>,

);


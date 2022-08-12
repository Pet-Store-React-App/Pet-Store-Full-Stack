import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import ContactUs from './ContactUs';
import Order from './Order';
import Products from './Products';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import LogIn from './LogIn';
import CreateAccount from './CreateAccount';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/LogIn' element={<LogIn />}></Route>
        <Route path='/Create' element={<CreateAccount />}></Route>
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

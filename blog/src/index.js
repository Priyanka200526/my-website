import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './Ecommerce/Navbar';
import Men from './Ecommerce/Men';
import Women from './Ecommerce/Women';
import BeautyToys from './Ecommerce/BeautyToys';
import Grocery from './Ecommerce/Grocery';
import HomeKitchen from './Ecommerce/HomeKitchen';
import Mobile from './Ecommerce/Mobile';
import Electronics from './Ecommerce/Electronics';
import All from './Ecommerce/All';
import DataFetchingComponent from './Coo';
import Joinbutton from './Ecommerce/Joinbutton';
import Loginpage from './Ecommerce/Loginpage';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <DataFetchingComponent/> */}
    

<BrowserRouter>
  <Routes>
    <Route path="/" element={<><Navbar /><All /></>} />
    <Route path="/Men" element={<><Navbar /><Men /></>} />
    <Route path="/Women" element={<><Navbar /><Women /></>} />
    <Route path="/BeautyToys" element={<><Navbar /><BeautyToys /></>} />
    <Route path="/Grocery" element={<><Navbar /><Grocery /></>} />
    <Route path="/HomeKitchen" element={<><Navbar /><HomeKitchen /></>} />
    <Route path="/Mobile" element={<><Navbar /><Mobile /></>} />
    <Route path="/Electronics" element={<><Navbar /><Electronics /></>} />
    <Route path="/All" element={<><Navbar /><All /></>} />
    <Route path="/Joinbutton" element={<Joinbutton />} />
    <Route path="/Loginpage" element={<Loginpage />} />
  </Routes>
</BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();

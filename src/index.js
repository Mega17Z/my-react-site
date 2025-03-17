import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Navbar from './navbar/navbar';
import FirstSection from './firstSection/firstSection';
import SecondSection from './secondSection/secondSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <FirstSection title="Premier Section" />
    <SecondSection title="Deuxieme Section" />
  </React.StrictMode>
);
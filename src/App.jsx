import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './assets/components/navbar';
import Home from './assets/components/home';
import Contacto from './assets/components/contacto';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
};

export default App;

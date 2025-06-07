// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ApartmentDetail from './pages/ApartmentDetail';
import Store from './pages/Store';
import Cleaning from './pages/Cleaning';
import Design from './pages/Design';
import Renovation from './pages/Renovation';

export default function App() {
  return (
    <>
      <header className="header">
        <div className="container flex items-center justify-between">
          <Link to="/" className="logo">
            Real Estate Listings
          </Link>
          <nav>
            <Link to="/store" className="mx-2">Store</Link>
            <Link to="/cleaning" className="mx-2">Cleaning</Link>
            <Link to="/design" className="mx-2">Design</Link>
            <Link to="/renovation" className="mx-2">Renovation</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartments/:id" element={<ApartmentDetail />} />
  
          {/* NEW PAGES */}
          <Route path="/store" element={<Store />} />
          <Route path="/cleaning" element={<Cleaning />} />
          <Route path="/design" element={<Design />} />
          <Route path="/renovation" element={<Renovation />} />
        </Routes>
      </main>
    </>
  );
}

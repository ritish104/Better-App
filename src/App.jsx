// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Index from '../src/pages/Index';
import AboutUs from './pages/About-us';
import MortgageCalculator from './pages/Mortgage-calculator';
import Start from './pages/Start';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
        <Route path="/start" element={<Start />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

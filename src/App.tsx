import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;

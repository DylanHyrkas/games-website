import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Games from './pages/games';
import './App.css'
import EagleCraftPage from './pages/eaglecraft';
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/eaglecraft" element={<EagleCraftPage />} />
      </Routes>
    </Router>
  );
};

export default App;

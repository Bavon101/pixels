import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavgationBar from './components/NavgationBar';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <NavgationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;

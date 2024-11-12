// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import MissionPage from './Components/MissionPage';
import ProblemPage from './Components/ProblemPage';
import SolutionPage from './Components/SolutionPage';
import ChallengesPage from './Components/ChallengesPage';
import ContactPage from './Components/ContactPage';
import './style.css';
function App() {
  return (
    <Router>
      <Navbar />
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/problem" element={<ProblemPage />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;

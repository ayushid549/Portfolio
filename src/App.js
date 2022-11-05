import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Homepage from './components/Homepage.js';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import SkillComp from './components/SkillComp';
import CodingCard from './components/CodingCard';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <Navbar />
    <Routes>   
        <Route exact={true} path='/' element={<Homepage/>} />
        <Route  path="/About" element={<AboutMe/>} />
        <Route  path="/Education" element={<Education/>} />
        <Route  path="/CodingCard" element={<CodingCard/>} />
        <Route  path="/SkillComp" element={<SkillComp/>} />
        <Route  path="/Contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}
export default App;


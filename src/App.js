import React from 'react';
import "./App.css";
import Homepage from './components/Homepage.js';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import SkillComp from './components/SkillComp';
import CodingCard from './components/CodingCard';
//import CodingProfile from './components/CodingProfile';
import Contact from './components/Contact';
import Footer from './components/Footer.js';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact={true} path='/' element={<Homepage/>} />
        <Route  path="/About" element={<AboutMe/>} />
        <Route  path="/Education" element={<Education/>} />
        <Route  path="/CodingCard" element={<CodingCard/>} />
        <Route  path="/SkillComp" element={<SkillComp/>} />
        <Route  path="/Contact" element={<Contact/>} />
        <Route  path="/Footer" element={<Footer/>} />
      </Routes>
    
      
    </>
  );
}
export default App;


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
        <Route exact={true} path="/About" element={<AboutMe/>} />
        <Route exact={true} path="/Education" element={<Education/>} />
        <Route exact={true} path="/CodingCard" element={<CodingCard/>} />
        <Route exact={true} path="/SkillComp" element={<SkillComp/>} />
        <Route exact={true} path="/Contact" element={<Contact/>} />
        <Route exact={true} path="/Footer" element={<Footer/>} />
      </Routes>
    
      
    </>
  );
}
export default App;


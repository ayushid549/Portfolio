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
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path="/About" element={<AboutMe/>} />
        <Route exact path="/Education" element={<Education/>} />
        <Route exact path="/CodingCard" element={<CodingCard/>} />
        <Route exact path="/SkillComp" element={<SkillComp/>} />
        <Route exact path="/Contact" element={<Contact/>} />
        <Route exact path="/Footer" element={<Footer/>} />   
      </Routes>
    </>
  );
}
export default App;


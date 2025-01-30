import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSubscription } from '@apollo/client';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from "./NavBar";
import { motion } from "framer-motion";
// #region constants

// #endregion


function App() {
  return (
    <Routes>
      <Route path="/" element=<Body /> />
    </Routes>
  );
}

const Body: React.FC = () => {
  const [bodyContentsType, setBodyContentsType] = useState('');
  const [scale, setScale] = useState(0);
  return (
    <div className="App">
      <NavBar
        setBodyContentsType={setBodyContentsType}
      />
      {bodyContentsType == "Home" ? <AboutMeSection />
        : bodyContentsType == "Education" ? <EducationSection />
          : bodyContentsType == "Experience" ? <ExperienceDisplay />
            : bodyContentsType == "Contact" ? <ContactDisplay />
              : <AboutMeSection />
      }
      <header className="App-header">
      </header>
    </div>
  );
}
const AboutMeSection: React.FC = () => {
  return (
    <div className="aboutMeSection" >
      <span className="aboutMeText">
        <h2 className="whiteColor">Shiloh Minnix</h2>
        <h3 className="turqoiseColor">Software Developer</h3>
        <p>I have a passion for creating and designing scalable, meaningful digital solutions to satisfy the complex needs of businesses.</p>
      </span>
      <motion.img
        src={require("./images/engineerGraphic.webp")}
        width="auto"
        height="250px"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="invertedColorImage rightAlignedImage" />
    </div>
  );
}
const EducationSection: React.FC = () => { //TODO
  const educationDisplay = "Education"
  return (
    <>
      <p>{educationDisplay}</p>
    </>
  );
}
const ExperienceDisplay: React.FC = () => {
  const experienceDisplay = "Experience"
  return (
    <>
      <p>{experienceDisplay}</p>
    </>
  );
}
const ContactDisplay: React.FC = () => {
  const contactDisplay = "Contact"
  return (
    <>
      <p>{contactDisplay}</p>
    </>
  );
}
export default App;

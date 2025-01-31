import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSubscription } from '@apollo/client';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from "./NavBar";
import AboutMeSection from "./Sections/AboutMeSection";
import EducationSection from "./Sections/EducationSection";
import ProfessionalSection from './Sections/ProfessionalSection';
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
  return (
    <div className="App">
      <NavBar
        setBodyContentsType={setBodyContentsType}
      />
      {bodyContentsType == "Home" ? <AboutMeSection />
        : bodyContentsType == "Education" ? <EducationSection />
          : bodyContentsType == "Professional" ? <ProfessionalSection />
            : bodyContentsType == "Contact" ? <ContactDisplay />
              : <AboutMeSection />
      }
      <header className="App-header">
      </header>
    </div>
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

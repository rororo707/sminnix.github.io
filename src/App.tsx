import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from "./NavBar";
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
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <header className="App-header">
      </header>
    </div>
  );
}
const AboutMe: React.FC = () => {
  return (
    <div className="aboutMeSection">
      <span className="aboutMeText">
        <h2 className="whiteColor">Shiloh Minnix</h2>
        <h3 className="turqoiseColor">Software Developer</h3>
        <p>I have a passion for creating and designing scalable, meaningful digital solutions to satisfy the complex needs of businesses.</p>
      </span>
      <img src={require("./images/engineerGraphic.webp")}
        width="auto"
        height="250px"
        className="invertedColorImage rightAlignedImage" />
    </div>
  );
}
export default App;

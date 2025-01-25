import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import Icons from '@mui/icons-material/';

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
      <header className="App-header">
      </header>
    </div>
  );
}
const NavBar: React.FC = () => {
  return (
    <div className="navBarBackground">
      <div className="navBar">
        <div className="navBarTitle">
          <span>Shiloh Minnix</span>
        </div>
        <div className="navBarSelections">
          <NavBarSchoolHover />
          <NavBarExperienceHover />
          <NavBarContactHover />
        </div>
      </div>
    </div>
  );
}
const NavBarSchoolHover: React.FC = () => {
  return (
    <span className='navBarItem' onClick={() => { alert("Education clicked!") }}>
      <SchoolIcon
        fontSize="inherit"
        className="navBarIcon" />
      <span>Education</span >
    </span>
  );
}
const NavBarExperienceHover: React.FC = () => {
  return (
    <span className='navBarItem' onClick={() => { alert("Experience clicked!") }}>
      <WorkIcon
        fontSize="inherit"
        className="navBarIcon" />
      <span>Experience</span >
    </span>
  );
}
const NavBarContactHover: React.FC = () => {
  return (
    <span
      className='navBarItem' onClick={() => { alert("Contact clicked!") }}>
      <MailIcon
        fontSize="inherit"
        className="navBarIcon" />
      <span>Contact</span >
    </span>
  );
}
export default App;

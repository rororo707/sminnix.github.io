import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';

const NavBar: React.FC = () => {
    return (
        <div className="navBarBackground">
            <div className="navBar">
                <div className="navBarTitle whiteColor">
                    <span>rororo707.github.io/sminnix.github.io/</span>
                </div>
                <div className="navBarSelections">
                    <NavBarHomeHover />
                    <NavBarSchoolHover />
                    <NavBarExperienceHover />
                    <NavBarContactHover />
                </div>
            </div>
        </div>
    );
}
const NavBarHomeHover: React.FC = () => {
    return (
        <span className='navBarItem' onClick={() => { alert("Education clicked!") }}>
            <HomeIcon
                fontSize="inherit"
                className="navBarIcon" />
            <span>About Me</span >
        </span>
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


export default NavBar;
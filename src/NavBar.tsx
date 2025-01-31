import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';



interface INavBarProps {
    setBodyContentsType: React.Dispatch<React.SetStateAction<string>>;
}
const NavBar: React.FC<INavBarProps> = ({ setBodyContentsType }) => {
    return (
        <div className="navBarBackground">
            <div className="navBar">
                <SocialMediaButtons />
                <div className="navBarSelections">
                    <HomeHover
                        setBodyContentsType={setBodyContentsType}
                    />
                    <EducationHover
                        setBodyContentsType={setBodyContentsType}
                    />
                    <ProfessionalHover
                        setBodyContentsType={setBodyContentsType}
                    />
                    <ContactHover
                        setBodyContentsType={setBodyContentsType}
                    />
                </div>
            </div>
        </div>
    );
}
const SocialMediaButtons: React.FC = () => {
    return (
        <span>
            <a href="https://www.linkedin.com/in/shiloh-minnix/">
                <span className="socialMediaButton">

                    <img src={require("./images/linkedin.png")} />
                </span>
            </a>
            <a href="https://github.com/rororo707/">
                <span className="socialMediaButton">
                    <img src={require("./images/github.png")} />
                </span>
            </a>
        </span >
    );
}
const HomeHover: React.FC<INavBarProps> = ({ setBodyContentsType }) => {
    return (
        <span className='navBarItem' onClick={() => setBodyContentsType("Home")}>
            <HomeIcon
                fontSize="inherit"
                className="navBarIcon" />
            <span>About Me</span >
        </span>
    );
}
const EducationHover: React.FC<INavBarProps> = ({ setBodyContentsType }) => {
    return (
        <span className='navBarItem' onClick={() => setBodyContentsType("Education")}>
            <SchoolIcon
                fontSize="inherit"
                className="navBarIcon" />
            <span>Education</span >
        </span>
    );
}
const ProfessionalHover: React.FC<INavBarProps> = ({ setBodyContentsType }) => {
    return (
        <span className='navBarItem' onClick={() => setBodyContentsType("Professional")}>
            <WorkIcon
                fontSize="inherit"
                className="navBarIcon" />
            <span>Professional</span >
        </span>
    );
}
const ContactHover: React.FC<INavBarProps> = ({ setBodyContentsType }) => {
    return (
        <span
            className='navBarItem' onClick={() => setBodyContentsType("Contact")}>
            <MailIcon
                fontSize="inherit"
                className="navBarIcon" />
            <span>Contact</span >
        </span>
    );
}


export default NavBar;
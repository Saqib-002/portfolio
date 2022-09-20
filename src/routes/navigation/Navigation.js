import { useState } from "react";
import { Outlet,Link} from "react-router-dom";
import "./Navigation.css";
import NavIcon from "../../components/navIcon/navIcon";


const Navigation=({theme})=>{
    const [isNavOpen,setIsNavOpen] = useState(false);
    const toggleNavigation=()=>{
        setIsNavOpen(!isNavOpen);
    }
    return (
        <>
            <nav>
                <div className="menu-items"> 
                    <NavIcon theme={theme} path="home"/>
                    <NavIcon theme={theme} path="projects"/>
                    <NavIcon theme={theme} path="about"/>
                    <NavIcon theme={theme} path="contact"/>
                    <NavIcon theme={theme}/>
                </div>
                <div className={`menu-items-2 ${isNavOpen?"navOpen":"navCLose"}`}>
                    {!isNavOpen && <img  onClick={toggleNavigation} className="nav-icon hamburger" src="/assets/hamburger.svg" alt=""/>}
                    {isNavOpen && <img onClick={toggleNavigation} className="nav-icon close" src="/assets/close.svg" alt=""/>}
                    <Link onClick={toggleNavigation} to="/home">
                        <span className={`menu-item-2 f-h-${theme}`}>HOME</span>
                    </Link>
                    <Link onClick={toggleNavigation} to="/projects">
                        <span className={`menu-item-2 f-h-${theme}`}>PROJECTS</span>
                    </Link>
                    <Link onClick={toggleNavigation} to="/about">
                        <span className={`menu-item-2 f-h-${theme}`}>ABOUT</span>
                    </Link>
                    <Link onClick={toggleNavigation} to="/contact">
                        <span className={`menu-item-2 f-h-${theme}`}>CONTACT</span>
                    </Link>
                    <span onClick={toggleNavigation} className={`menu-item-2 f-h-${theme}`}>RESUME</span>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navigation;
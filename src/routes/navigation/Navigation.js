import { Outlet,Link } from "react-router-dom";
import "./Navigation.css";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";


const Navigation=()=>{
    return (
        <>
            <div className="menu-items"> 
                <Link to="/home">
                <div className="menu-item" menu-content="HOME">
                    <HomeIcon className="menu-icon"/>
                </div>
                </Link>
                <Link to="/projects">
                    <div className="menu-item" menu-content="PROJECTS">
                        <HomeIcon className="menu-icon" />
                    </div>
                </Link>
                <Link to="/about">
                    <div className="menu-item" menu-content="ABOUT">
                        <HomeIcon className="menu-icon"/>
                    </div>
                </Link>
                <Link to="contact">
                    <div className="menu-item" menu-content="CONTACT">
                        <HomeIcon className="menu-icon"/>
                    </div>
                </Link>
                <div className="menu-item" menu-content="RESUME">
                    <HomeIcon className="menu-icon"/>
                </div>
            </div>
        <Outlet/>
        </>
    )
}

export default Navigation;
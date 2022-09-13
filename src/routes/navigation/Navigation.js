
import "./Navigation.css";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";


const Navigation=()=>{
    return (
        <div className="menu-items"> 
            <div className="menu-item" menu-content="HOME">
                <HomeIcon className="menu-icon"/>
            </div>
            <div className="menu-item" menu-content="PROJECTS">
                <HomeIcon className="menu-icon" />
            </div>
            <div className="menu-item" menu-content="ABOUT">
                <HomeIcon className="menu-icon"/>
            </div>
            <div className="menu-item" menu-content="CONTACT">
                <HomeIcon className="menu-icon"/>
            </div>
            <div className="menu-item" menu-content="RESUME">
                <HomeIcon className="menu-icon"/>
            </div>
        </div>
    )
}

export default Navigation;
import { useState } from "react";
// importing icons
import {ReactComponent as Hamburger} from "../../assets/hamburger.svg"
import {ReactComponent as Close} from "../../assets/close.svg"

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
        </div>
    )
}

export default Navigation;
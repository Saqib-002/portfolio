import { useState } from "react";
import "./themes.css";

const Themes=({setTheme})=>{
    const [isThemePanelOpen,setIsThemePanelOpen]=useState(false);
    const toggleThemePanel=()=>{
        setIsThemePanelOpen(!isThemePanelOpen);
    }
    const selectThemeColor=(e)=>{
        setTheme(e.target.classList[1]);
    }
    return(
        <>
            <div className={`themes ${isThemePanelOpen?"theme-panel-open":"theme-panel-close"}`}>
                <div onClick={toggleThemePanel} class="theme-selector-out">
                    <div className="theme-selector"></div>
                </div>
                <div className="theme-colors-out">
                    <p className="theme-colors-heading">Custom Colors</p>
                    <div class="theme-colors">
                        <div onClick={selectThemeColor} className="themebox blue" ></div>
                        <div onClick={selectThemeColor} className="themebox purple"></div>
                        <div onClick={selectThemeColor} className="themebox yellow"></div>
                        <div onClick={selectThemeColor} className="themebox orange"></div>
                        <div onClick={selectThemeColor} className="themebox pink"></div>
                        <div onClick={selectThemeColor} className="themebox red"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Themes;
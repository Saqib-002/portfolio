import { useState } from "react";
import "./themes.css";

const Themes=({setTheme,theme})=>{
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
                <div onClick={toggleThemePanel} className="theme-selector-out">
                    <div className={`${theme} theme-selector`}></div>
                </div>
                <div className="theme-colors-out">
                    <p className="theme-colors-heading">Custom Colors</p>
                    <div className="theme-colors">
                        <div onClick={selectThemeColor} className="themebox blue" ></div>
                        <div onClick={selectThemeColor} className="themebox purple"></div>
                        <div onClick={selectThemeColor} className="themebox green"></div>
                        <div onClick={selectThemeColor} className="themebox orange"></div>
                        <div onClick={selectThemeColor} className="themebox pink"></div>
                        <div onClick={selectThemeColor} className="themebox cyan"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Themes;
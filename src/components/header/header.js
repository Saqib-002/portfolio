import { useLocation } from "react-router-dom";
import "./header.css";
const Header=({theme})=>{
    const {pathname}=useLocation();
    let path=pathname.split("/")[1];
    if(!path){
        path='home'
    }
    return (
        <header className="header">
            <img className="logo" src="/assets/logo.png"alt="no logo found"/>
            {path==='home' && <div className="page">{path}</div>}
            {path==='projects' && <div className="page">{path}</div>}
            {path==='contact' && <div className="page">{path}</div>}
            {path==='about' && <div className="page">{path} <span className={`f-${theme}`}>Me</span></div>}
        </header>
    )
}
export default Header;
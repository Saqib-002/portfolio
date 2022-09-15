import { useLocation } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.png"
const Header=()=>{
    const {pathname}=useLocation();
    let path=pathname.split("/")[1];
    if(!path){
        path='home'
    }
    return (
        <header className="header">
            <img className="logo" src={logo} alt="no logo found"/>
            {path==='home' && <div className="page">{path}</div>}
            {path==='projects' && <div className="page">{path}</div>}
            {path==='contact' && <div className="page">{path}</div>}
            {path==='about' && <div className="page">{path} <span className="about-page-header">Me</span></div>}
        </header>
    )
}
export default Header;
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
            <img className="logo" src={logo} alt="ss"/>
            {path==='home' && <div className="page">{path}</div>}
            {path==='projects' && <div className="page">{path}</div>}
            {path==='contact' && <div className="page">{path}</div>}
            {path==='about' && <div className="page">{path}</div>}
        </header>
    )
}
export default Header;
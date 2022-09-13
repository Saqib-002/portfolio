import { useLocation } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.png"
const Header=()=>{
    const {pathname}=useLocation();
    const path=pathname.split("/")[1];
    return (
        <header className="header">
            <img className="logo" src={logo} alt="ss"/>
            <div className="page">{path}</div>
        </header>
    )
}
export default Header;
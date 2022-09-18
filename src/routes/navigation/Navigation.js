import { Outlet} from "react-router-dom";
import "./Navigation.css";
import NavIcon from "../../components/navIcon/navIcon";


const Navigation=({theme})=>{
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
            </nav>
            <Outlet/>
        </>
    )
}

export default Navigation;
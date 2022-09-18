import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";

import "./navIcon.css";
const NavIcon=({path,theme})=>{
    return(
        <>
            {path? 
            (
                <Link to={`/${path}`}>
                    <div className={`menu-item bc-${theme} bg-a-${theme} bg-h-${theme}`} menu-content={path.toUpperCase()}>
                        <HomeIcon className="menu-icon"/>
                    </div>
                </Link>
            ):
            (
                <div className={`menu-item bc-${theme} bg-a-${theme} bg-h-${theme}`} menu-content="RESUME">
                    <HomeIcon className="menu-icon"/>
                </div>
            )
            }
        </>
    )
}
export default NavIcon;
import { Link } from "react-router-dom";

import "./navIcon.css";
const NavIcon=({path,theme,imgName})=>{
    return(
        <>
            {path? 
            (
                <Link to={`/${path}`}>
                    <div className={`menu-item bc-${theme} bg-a-${theme} bg-h-${theme}`} menu-content={path.toUpperCase()}>
                        <img src={`/assets/navigation/${imgName}`} alt="" />
                    </div>
                </Link>
            ):
            (
                <div className={`menu-item bc-${theme} bg-a-${theme} bg-h-${theme}`} menu-content="RESUME">
                    <img  src={`/assets/navigation/${imgName}`} alt=""/>
                </div>
            )
            }
        </>
    )
}
export default NavIcon;
import { useState } from "react";
import { Outlet,Link} from "react-router-dom";
import "./Navigation.css";

const Navigation=({theme})=>{
    const [isNavOpen,setIsNavOpen] = useState(false);
    const toggleNavigation=()=>{
        setIsNavOpen(!isNavOpen);
    }
    return (
        <>
            <nav class={`${isNavOpen?"nav-h-100":"nav-h-0"}`}>
                <div class="nav-icon">
                    <img className="logo" src="/assets/logo.png" alt=""/>
                    {
                        isNavOpen?(
                            <img onClick={toggleNavigation} className="close-nav-btn" src="/assets/close.svg" alt=""/>
                        ):(
                            <div onClick={toggleNavigation} class="hamburger-icon">
                                <div class="layer"></div> 
                            </div>
                        )
                    }
                </div>
                <div class={`menu-items-container ${isNavOpen?"nav-open":"nav-close"}`}>
                    <div className="my-pic" style={{
                        backgroundImage:`url(${"/assets/aboutPic.jpg"})`
                    }}  ></div>
                    <div class="menu-items">
                        <div className="menu-item"><span className={`f-${theme}`}>SAQIB ALI</span>&nbsp; SHAH</div>
                        <Link onClick={toggleNavigation} to="/home">
                            <div className={`menu-item f-h-${theme}`}><span className="nav-number">01</span>HOME</div>
                        </Link>
                        <Link onClick={toggleNavigation} to="/about">
                            <div className={`menu-item f-h-${theme}`}><span className="nav-number">02</span>ABOUT</div>
                        </Link>
                        <Link onClick={toggleNavigation} to="/projects">
                            <div className={`menu-item f-h-${theme}`}><span className="nav-number">03</span>Projects</div>
                        </Link>
                        <Link onClick={toggleNavigation} to="/contact">
                            <div className={`menu-item f-h-${theme}`}><span className="nav-number">04</span>CONTACT</div>
                        </Link>
                            <div onClick={toggleNavigation} className={`menu-item resume-nav f-h-${theme}`}><span className="nav-number">05</span>RESUME</div>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navigation;
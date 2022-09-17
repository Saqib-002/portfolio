import "./footer.css"
import { ReactComponent as FB } from "../../assets/js.svg";
const Footer=()=>{
    return(
        <footer className="footer">
            <div className="socials">
                <FB className="footer-icon"/>
                <FB className="footer-icon"/>
                <FB className="footer-icon"/>
            </div>
            <p className="copyright">&copy; 2022 Saqib Ali Shah</p>
        </footer>
    )
}

export default Footer;

import "./footer.css";
const Footer=({theme})=>{
    return(
        <footer className="footer">
            <div className="socials">
                <a href="https://github.com/Saqib-002">
                    <div className={`footer-icon`} >
                        <img src="/assets/socials/github.svg" alt=""/>
                    </div>
                </a>
                <a href="https://www.facebook.com/syedsaqib.alishah.75">
                    <div className={`footer-icon`} >
                        <img src="/assets/socials/facebook.svg" alt=""/>
                    </div>
                </a>
                <a href="https://twitter.com/saqibshah17201">
                    <div className={`footer-icon`} >
                        <img src="/assets/socials/twitter.svg" alt=""/>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/saqib-ali-shah-b991941b8/">
                    <div className={`footer-icon`} >
                        <img src="/assets/socials/linkedin.svg" alt=""/>
                    </div>
                </a>
            </div>
            <p className="copyright">&copy; 2022 Saqib Ali Shah</p>
        </footer>
    ) 
}

export default Footer;
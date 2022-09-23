import Typewriter from "typewriter-effect";
import "./home.css";
import ParticleBackground from "../../components/particle/ParticleBackgorund"

const Home = ({theme}) => {
    console.log(theme)
    return (
        <main className="home" data-aos="zoom-in">
            <ParticleBackground/>
            <div className="home-container">
                <div className="name">
                <span className={`f-${theme}`}>Saqib Ali</span> Shah
                </div>
                <div class="social-menu">
                <a href="https://github.com/Saqib-002">
                    <div className={`social-menu-item f-${theme}`} social-menu-name="Github">
                        <img  src="/assets/socials/github.svg" alt=""/>
                    </div>
                </a>
                <a href="https://www.facebook.com/syedsaqib.alishah.75">
                    <div className={`social-menu-item f-${theme}`} social-menu-name="Facebook">
                        <img  src="/assets/socials/facebook.svg" alt=""/>
                    </div>
                </a>
                <a href="https://twitter.com/saqibshah17201">
                    <div className={`social-menu-item f-${theme}`} social-menu-name="Twitter">
                        <img  src="/assets/socials/twitter.svg" alt=""/>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/saqib-ali-shah-b991941b8/">
                    <div className={`social-menu-item f-${theme}`} social-menu-name="LinkedIn">
                        <img  src="/assets/socials/linkedin.svg" alt=""/>
                    </div>
                </a>
                </div>
                <div className={`field-container f-${theme}`}>
                    <span className="pre-field">I am a </span>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                            .typeString("Software Developer.")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("freeLancer.")
                            .start()
                        }}
                        options={{
                            loop:true,
                            delay:100,
                            deleteSpeed:40
                        }}
                    />
                </div>
            </div>
        </main>
    );
};

export default Home;

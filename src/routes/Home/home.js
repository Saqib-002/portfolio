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
                <div className={`field-container f-${theme}`}>
                    <span className="pre-field">I am a </span>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                            .typeString("Web Developer.")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Data Scientist.")
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

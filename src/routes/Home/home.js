import Typewriter from "typewriter-effect";
import "./home.css";
import ParticleBackground from "../../components/particle/ParticleBackgorund"

const Home = () => {
    return (
        <main className="home" data-aos="zoom-in">
            <ParticleBackground/>
            <div class="home-container">
                <div className="name">
                    Saqib <span className="middle-name">Ali</span> Shah
                </div>
                <div className="field-container">
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

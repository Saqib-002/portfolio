import "./about.css";
import aboutPic from "../../assets/background.jpg"
import Services from "../../components/services/services";
import Skills from "../../components/skills/skills";
const About=()=>{
    return(
        <>
            <div className="about-container">
                <h2 className="about-heading">Get Me Know</h2>
                <div className="about-me">
                    <img className="about-pic"src={aboutPic} alt="not fount"/>
                    <div className="about">
                        <div className="about-bio">I am a web developer and data scientist based in Kahuta, Pakistan</div>
                        <div className="about-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate numquam corporis architecto qui voluptates quo praesentium fuga autem, consequuntur tempore officiis ipsa necessitatibus temporibus voluptas, consectetur possimus blanditiis omnis, odio repellat quis cupiditate iste accusantium. Exercitationem rem blanditiis nisi dignissimos sit a reprehenderit commodi facilis illum nam. Adipisci, quaerat! Lorem400</div>
                        <button className="download-resume-btn">Download CV</button>
                    </div>
                </div>
            </div>
            <Services/>
            <Skills/>
        </>
    )
} 

export default About;
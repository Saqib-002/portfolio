import "./about.css";
import aboutPic from "../../assets/background.jpg"
import Services from "../../components/services/services";
import Skills from "../../components/skills/skills";
import Footer from "../../components/footer/footer";
import CustomBtn from "../../components/customBtn/customBtn";
const About=({theme})=>{
    return(
        <>
            <div className="about-container">
                <h2 className="about-heading">Get To Know <span className={`f-${theme}`}> Me.</span></h2>
                <div className="about-me">
                    <img className="about-pic"src={aboutPic} alt="not fount"/>
                    <div className="about">
                        <div className="about-bio">I am a <span className={`f-${theme}`}>web developer</span> and <span className={`f-${theme}`}>data scientist</span> based in Kahuta, Pakistan</div>
                        <div className="about-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate numquam corporis architecto qui voluptates quo praesentium fuga autem, consequuntur tempore officiis ipsa necessitatibus temporibus voluptas, consectetur possimus blanditiis omnis, odio repellat quis cupiditate iste accusantium. Exercitationem rem blanditiis nisi dignissimos sit a reprehenderit commodi facilis illum nam. Adipisci, quaerat! Lorem400</div>
                        <CustomBtn label="Download Resume" theme={theme}/>
                    </div>
                </div>
            </div>
            <Services theme={theme}/>
            <Skills theme={theme}/>
            <Footer/>
        </>
    )
} 

export default About;
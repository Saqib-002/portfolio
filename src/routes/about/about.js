import "./about.css";
import Services from "../../components/services/services";
import Skills from "../../components/skills/skills";
import Footer from "../../components/footer/footer";
import CustomBtn from "../../components/customBtn/customBtn";
const About=({theme})=>{
    return(
        <>
            <div className="about-container">
                <h2 className="about-heading">About <span className={`f-${theme}`}> Me.</span></h2>
                <h2 className="about-subheading">Get To Know <span className={`f-${theme}`}> Me.</span></h2>
                <div className="about-me">
                    <div className="about-pic" style={{
                        backgroundImage:`url(${"/assets/aboutPic.jpg"})`
                    }}></div>
                    <div className="about">
                        <div className="about-bio">I am a <span className={`f-${theme}`}>web developer</span> and <span className={`f-${theme}`}>data scientist</span> based in Kahuta, Pakistan.</div>
                        <div className="about-details">I am a Computer Science Student currently studying from Institue of Space and Technologies <span className={`f-${theme}`}>(IST)</span>. I love to create beautifull & specially functional websites and enjoy while doing problem solving and coding. </div>
                        <div className="download-resume-btn">
                            <CustomBtn label="Download Resume" theme={theme}/>
                        </div>
                    </div>
                </div>
            </div>
            <Services theme={theme}/>
            <Skills theme={theme}/>
            <Footer theme={theme}/>
        </>
    )
} 

export default About;
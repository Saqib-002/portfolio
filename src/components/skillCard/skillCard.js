import "./skillCard.css";

const SkillCard=({theme,imgName,percentage,skill})=>{
    return(
        <>
            <div data-aos="fade-up" className="skill-card">
                <img src={`/assets/skills/${imgName}`} alt="" className="skill-img"/>
                <div className="skill-out-progress-bar">
                    <div className={`skill-in-progress-bar ${theme}`} style={{width:`${percentage}%`}} percentage={`${skill}: ${percentage}`}>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SkillCard;
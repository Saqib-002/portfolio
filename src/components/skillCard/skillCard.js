import "./skillCard.css";
import { ReactComponent as JS } from "../../assets/js.svg";

const SkillCard=()=>{
    return(
        <>
            <div class="skill-card">
                <JS class="skill-img"/>
                <div class="skill-out-progress-bar">
                    <div class="skill-in-progress-bar" data-aos-duration="1500" data-aos="zoom-in" style={{width:"100%"}} percentage={100}>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SkillCard;
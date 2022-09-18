

import Logo from "../../assets/logo.png"
import "./serviceCard.css";

const ServiceCard=({data_aos,theme})=>{
    return(
        <div data-aos={data_aos} className="serviceCard">
            <img className="service-img" src={Logo} alt="Not found"/>
            <div class={`bg-color ${theme}`}></div>
            <h3 className="service-heading">Server Heading</h3>
            <p className="service-details">service Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate praesentium voluptatem error temporibus? Repellendus suscipit temporibus cupiditate sequi nulla corrupti, voluptatum eligendi laboriosam veritatis reprehenderit, beatae quos minima ex optio!</p>
        </div>
    )
}
export default ServiceCard;
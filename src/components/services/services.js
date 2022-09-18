import ServiceCard from "../serviceCard/serviceCard";

import "./services.css";

const Services=({theme})=>{
    return(
        <div className="services-container">
            <h1 class="services-heading"> <span class={`f-${theme}`}> My </span>Services</h1>
            <div class="service-cards">
                <ServiceCard theme={theme} data_aos="fade-right"/>
                <ServiceCard theme={theme} data_aos="fade-up"/>
                <ServiceCard theme={theme} data_aos="fade-left"/>
                <ServiceCard theme={theme} data_aos="fade-right"/>
                <ServiceCard theme={theme} data_aos="fade-left"/>
            </div>
        </div>
    )
}
export default Services;
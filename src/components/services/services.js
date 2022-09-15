import ServiceCard from "../serviceCard/serviceCard";

import "./services.css";

const Services=()=>{
    return(
        <div className="services-container">
            <h1 class="services-heading">My Services</h1>
            <div class="service-cards">
                <ServiceCard data_aos="fade-right"/>
                <ServiceCard data_aos="fade-up"/>
                <ServiceCard data_aos="fade-left"/>
                <ServiceCard data_aos="fade-right"/>
                <ServiceCard data_aos="fade-left"/>
            </div>
        </div>
    )
}
export default Services;
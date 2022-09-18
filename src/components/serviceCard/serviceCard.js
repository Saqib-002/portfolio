

import "./serviceCard.css";

const ServiceCard=({data_aos,theme,imgName,service,serviceDetails})=>{
    return(
        <div data-aos={data_aos} className="serviceCard">
            <img className="service-img" src={`/assets/services/${imgName}`} alt="Not found"/>
            <div className={`bg-color ${theme}`}></div>
            <h3 className="service-heading">{service}</h3>
            <p className="service-details">{serviceDetails}</p>
        </div>
    )
}
export default ServiceCard;
import CustomBtn from "../customBtn/customBtn";
import FormInput from "../formInput/formInput";
import "./contactForm.css";

const ContactForm=({theme})=>{
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Name: ",e.target.name.value);
        console.log("Email: ",e.target.email.value);
        console.log("Subject: ",e.target.subject.value);
        console.log("Message: ",e.target.message.value);
    }
    return(
        <div className="contact">
            <iframe width="100%" height="900px" className="map"  title="map" scrolling="no" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=kahuta&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" ></iframe>
            <div className="contact-form-container">
                <h2 className="contact-heading"><span className={`f-${theme}`}> Get </span> in touch.</h2>
                <p className="contact-details">Fill out the form below with some info about your project/any query and i will get back to you as soon as i can.</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <FormInput label="Name" type="text" name="name" id="name"/>
                    <FormInput label="Email" type="email" name="email" id="email"/>
                    <FormInput label="Subject" type="text" name="subject" id="subject"/>
                    <label htmlFor="message" >Message</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    <CustomBtn label="Send" theme={theme}/>
                </form>
            </div>
        </div>
    )
}
export default ContactForm;
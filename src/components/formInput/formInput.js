import "./formInput.css";

const FormInput=({label,...otherProps})=>{
    return(
        <div className="form-input-container">
            <label htmlFor={otherProps.id} color="red" className="form-input-label">{label}</label>
            <input {...otherProps} className="form-input"/>
        </div>
    )
}
export default FormInput;
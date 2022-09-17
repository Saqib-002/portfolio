import "./customBtn.css";

const CustomBtn = ({label,...otherProps})=>{
    console.log(label,otherProps);
    return(
        <div className="custom-btn-container">
            <button className="custom-btn" label={label}>
                {label}
                <div className="custom-btn-style" ></div>
            </button>
        </div>
    )
}
export default CustomBtn;
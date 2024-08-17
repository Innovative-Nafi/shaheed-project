import img from "../../../public/Img/Shaheed.jpg"
import "./Shaheed.css"

const Shaheed = ({sayeed, button}) => {
    console.log(sayeed);
    const{name, age, location, cause_of_death, date, occupation} = sayeed
    return (
        <div className="border">
            <div>
            <img className="s-img" src={img} alt="" />
            </div>
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
            <p>Cause: {cause_of_death}</p>
            <p>Date: {date}</p>
            <p>Occupation: {occupation}</p>
            <button onClick={()=> button(sayeed)}>Click</button>
        </div>
        
       
    );
};

export default Shaheed;
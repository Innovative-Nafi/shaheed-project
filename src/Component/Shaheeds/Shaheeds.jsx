import { useEffect } from "react";
import { useState } from "react";
import Shaheed from "../Shaheed/Shaheed";
import './Shaheeds.css'
import { addToLocalStorage } from "../../utilities/localStorage";
import { getItem } from "localforage";


const Shaheeds = () => {
    const [shaheeds, setShaheeds] = useState([])
    const [show, setShow] = useState([])

    const handleClick = shaheed=>{
        const newShow = [...show, shaheed]
        setShow(newShow)

        addToLocalStorage(shaheed.id)
    }

    useEffect(()=>{
        fetch("Shaheed.json")
        .then(res=> res.json())
        .then(data=> setShaheeds(data))
    }, [])

    useEffect(()=>{
        console.log(shaheeds.length);
        if(shaheeds.length > 0){
            const  data = getItem()
        console.log(data, shaheeds);

        for(const id of data){
            console.log(id);
        }

        }
        
    }, [shaheeds])

    return (
        <div>
            <h2>Shaheeds List: {show.length}</h2>
         <div className="container">
         {
                shaheeds.map(singleShaheed=> <Shaheed key={singleShaheed.id} sayeed={singleShaheed} button={handleClick}></Shaheed>)
            }
         </div>
        </div>
    );
};

export default Shaheeds;
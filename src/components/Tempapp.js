import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tempapp = () =>{
    const [city,setCity] = useState("indore");
    const [data , setData] = useState();
    const [temp , setTemp] = useState();
    
    const fetchApi = async() =>{

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dcf25dc9d0ceb83ee7a748820451ac9b&units=metric`)
    const res = await response.json();    
    console.log(res);
        setData(res);
        setTemp(res.main.temp)
    }
    useEffect(()=>{
        fetchApi();
    },[]);
    return(
        <>
        
        <div className="box">
            <div className="inputData">
                <input type="search" className="inputFeild" onChange={(e)=>{
                    // setCity(e.target.value);
                }}/>
            </div>
        
        <div className="info">
         <h2 className="location">
         <i class="fa-solid fa-cloud"></i>{city}
         </h2>
         <h1 className="temp">
             {temp} ^C
         </h1>
         <h3 className="tempmin_max">Min : 5.25*Cel | Max : 5.25*Cel</h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div></div>
        </>
    )
}
export default Tempapp;
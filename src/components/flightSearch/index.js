import React, {useState} from "react";
import "./index.css";
import SearchComponent from "./search"



function FlightSearch ({flightsData}) {
    
    
    const [flightInput, setFlightInput] = useState({
        sourceInput : "",
        destinationInput : ""
    });
    
    const [filteredData , setFilteredData] = useState(null);
    
    const handleChange = (event)=>{
        const {name,value} = event.target;
        setFlightInput({...flightInput, [name] : value})
    }
    
    const filterTheData = ()=>{
        const filteredData = flightsData.filter((flight)=>(
            flight.departure_from.toUpperCase() == flightInput.sourceInput.toUpperCase() && 
            flight.arrival_at.toUpperCase() == flightInput.destinationInput.toUpperCase()
         ))
         setFilteredData(filteredData);
    }
    
    const handleOnClick = (event) => {
        event.preventDefault();
        filterTheData();
        
    }
    
    return(
        <div>
        <h1>Flight Search</h1>
        <form>
            <input 
            type = "text"
            name = "sourceInput"
            value = {flightInput.sourceInput}
            onChange = {handleChange}
            data-testid="source-input"
            />
            <input 
            type = "text" 
            name = "destinationInput"
            value = {flightInput.destinationInput}
            onChange = {handleChange}
            data-testid="destination-input"
            />
            <button onClick={handleOnClick} data-testid="search-button">Search</button>
        </form>
        <SearchComponent filteredData={filteredData} /> 
        </div>
    )

}





export default FlightSearch;
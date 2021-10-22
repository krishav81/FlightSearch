import React, {useState} from "react";
import "./index.css";
import SearchComponent from "./search"

function FlightSearch ({flightsData}) {
    
    
    const [flightInput, setFlightInput] = useState({});
    const [filteredData , setFilteredData] = useState(null);
    
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
            onChange={(e)=>{
            setFlightInput({...flightInput,sourceInput:e.target.value});
          }}
            data-testid="source-input"
            />
            <input 
            type = "text" 
            name = "destinationInput"
            onChange={(e)=>{
            setFlightInput({...flightInput,destinationInput:e.target.value});
          }}
            data-testid="destination-input"
            />
            <button onClick={handleOnClick} data-testid="search-button">Search</button>
        </form>
        <SearchComponent filteredData={filteredData} /> 
        </div>
    )

}





export default FlightSearch;

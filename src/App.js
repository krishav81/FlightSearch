import React, {useState, useEffect}  from "react";
import FlightSearch from "./components/flightSearch";

function App() {
    
    const [flightsData, setflightsData] = useState([{}]);
    
    const getTheData = async ()=>{
        const response = await fetch("https://jsonmock.doselect.com/api/domestic_flights/domestic_flights");
        const finalResponse = await response.json();
        setflightsData(finalResponse);
    }
    
    useEffect(()=>{
        getTheData();
    },[])
    
    return(
        <FlightSearch flightsData={flightsData}  />   
    )
    
}



export default App;

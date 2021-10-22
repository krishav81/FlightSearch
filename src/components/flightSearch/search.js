import React, {useState} from "react";
import "./index.css";

function SearchComponent(obj)
{
    const { filteredData } = obj;
    const renderOnCondition = () => {
        if(filteredData == null)
            return;
        if(filteredData.length == 0)
            return ((
                <div data-testid="no-flights">No flights found</div>
            ))
        else
            return((
                <table>
                    <thead>
                        <td>DEPARTURE</td>
                        <td>DURATION</td>
                        <td>ARRIVAL</td>
                        <td>PRICE</td>
                    </thead>
                    <tbody data-testid="flight-results">
                        {
                        filteredData.map((flight) =>(
                            <tr key={flight.id}>
                                <td>{flight.takeoff_timestamp}</td>
                                <td>{flight.duration}</td>
                                <td>{flight.landing_timestamp}</td>
                                <td>{flight.flight_ticket_price}</td>
                            </tr>
                        ))
                            
                        }
                    </tbody>
                </table>
            
            ))
    }
    
    return(
        <div>
        {renderOnCondition()}
        </div>
    )
}

export default SearchComponent

import React from 'react';
import FlightSearch from './components/flightSearch/index.js';
import {render, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
    cleanup()
});

const filghtsData = [
  {
    "id": 1,
    "takeoff_timestamp": "13/06/2021",
    "landing_timestamp": "14/06/2021",
    "duration": "4h",
    "departure_from": "Kolkata",
    "arrival_at": "Bangalore",
    "flight_ticket_price": 4660
  },
  {
    "id": 2,
    "takeoff_timestamp": "15/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "4h",
    "departure_from": "Chennai",
    "arrival_at": "Mumbai",
    "flight_ticket_price": 6545
  },
  {
    "id": 3,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "6h",
    "departure_from": "Chennai",
    "arrival_at": "Pune",
    "flight_ticket_price": 7842
  },
  {
    "id": 4,
    "takeoff_timestamp": "15/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "5h",
    "departure_from": "Chennai",
    "arrival_at": "Pune",
    "flight_ticket_price": 2863
  },
  {
    "id": 5,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "8h",
    "departure_from": "Kolkata",
    "arrival_at": "Pune",
    "flight_ticket_price": 8196
  },
  {
    "id": 6,
    "takeoff_timestamp": "15/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "1h",
    "departure_from": "Chennai",
    "arrival_at": "Bangalore",
    "flight_ticket_price": 6498
  },
  {
    "id": 7,
    "takeoff_timestamp": "15/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "2h",
    "departure_from": "Delhi",
    "arrival_at": "Pune",
    "flight_ticket_price": 3560
  },
  {
    "id": 8,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "6h",
    "departure_from": "Kolkata",
    "arrival_at": "Mumbai",
    "flight_ticket_price": 8691
  },
  {
    "id": 9,
    "takeoff_timestamp": "17/06/2021",
    "landing_timestamp": "17/06/2021",
    "duration": "7h",
    "departure_from": "Kolkata",
    "arrival_at": "Mumbai",
    "flight_ticket_price": 4337
  },
  {
    "id": 10,
    "takeoff_timestamp": "16/06/2021",
    "landing_timestamp": "16/06/2021",
    "duration": "7h",
    "departure_from": "Kolkata",
    "arrival_at": "Bangalore",
    "flight_ticket_price": 4022
  },
  {
    "id": 11,
    "takeoff_timestamp": "15/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "7h",
    "departure_from": "Kolkata",
    "arrival_at": "Bangalore",
    "flight_ticket_price": 8800
  },
  {
    "id": 12,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "7h",
    "departure_from": "Delhi",
    "arrival_at": "Pune",
    "flight_ticket_price": 3519
  },
  {
    "id": 13,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "7h",
    "departure_from": "Kolkata",
    "arrival_at": "Pune",
    "flight_ticket_price": 7037
  },
  {
    "id": 14,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "15/06/2021",
    "departure_from": "Chennai",
    "arrival_at": "Bangalore",
    "flight_ticket_price": 4910
  },
  {
    "id": 15,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "7h",
    "departure_from": "Kolkata",
    "arrival_at": "Pune",
    "flight_ticket_price": 4612
  },
  {
    "id": 16,
    "takeoff_timestamp": "15/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "8h",
    "departure_from": "Kolkata",
    "arrival_at": "Mumbai",
    "flight_ticket_price": 5362
  },
  {
    "id": 17,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "8h",
    "departure_from": "Chennai",
    "arrival_at": "Pune",
    "flight_ticket_price": 4842
  },
  {
    "id": 18,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "8h",
    "departure_from": "Delhi",
    "arrival_at": "Bangalore",
    "flight_ticket_price": 7494
  },
  {
    "id": 19,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "7h",
    "departure_from": "Delhi",
    "arrival_at": "Bangalore",
    "flight_ticket_price": 6115
  },
  {
    "id": 20,
    "takeoff_timestamp": "15/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "7h",
    "departure_from": "Chennai",
    "arrival_at": "Pune",
    "flight_ticket_price": 4062
  },
  {
    "id": 21,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "7h",
    "departure_from": "Chennai",
    "arrival_at": "Pune",
    "flight_ticket_price": 5847
  },
  {
    "id": 22,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "2h",
    "departure_from": "Chennai",
    "arrival_at": "Bangalore",
    "flight_ticket_price": 2782
  },
  {
    "id": 23,
    "takeoff_timestamp": "15/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "4h",
    "departure_from": "Chennai",
    "arrival_at": "Pune",
    "flight_ticket_price": 3944
  },
  {
    "id": 24,
    "takeoff_timestamp": "15/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "4h",
    "departure_from": "Chennai",
    "arrival_at": "Pune",
    "flight_ticket_price": 8984
  },
  {
    "id": 25,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "4h",
    "departure_from": "Chennai",
    "arrival_at": "Mumbai",
    "flight_ticket_price": 4643
  },
  {
    "id": 26,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "3h",
    "departure_from": "Chennai",
    "arrival_at": "Bangalore",
    "flight_ticket_price": 7485
  },
  {
    "id": 27,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "3h",
    "departure_from": "Delhi",
    "arrival_at": "Mumbai",
    "flight_ticket_price": 3501
  },
  {
    "id": 28,
    "takeoff_timestamp": "15/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "3h",
    "departure_from": "Chennai",
    "arrival_at": "Mumbai",
    "flight_ticket_price": 4408
  },
  {
    "id": 29,
    "takeoff_timestamp": "15/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "3h",
    "departure_from": "Delhi",
    "arrival_at": "Mumbai",
    "flight_ticket_price": 7307
  },
  {
    "id": 30,
    "takeoff_timestamp": "15/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "5h",
    "departure_from": "Kolkata",
    "arrival_at": "Pune",
    "flight_ticket_price": 5943
  },
  {
    "id": 31,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "14/06/2021",
    "duration": "6h",
    "departure_from": "Kolkata",
    "arrival_at": "Bangalore",
    "flight_ticket_price": 9530
  },
  {
    "id": 32,
    "takeoff_timestamp": "15/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "3h",
    "departure_from": "Delhi",
    "arrival_at": "Pune",
    "flight_ticket_price": 3889
  },
  {
    "id": 33,
    "takeoff_timestamp": "15/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "9h",
    "departure_from": "Kolkata",
    "arrival_at": "Mumbai",
    "flight_ticket_price": 4739
  },
  {
    "id": 34,
    "takeoff_timestamp": "14/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "2h",
    "departure_from": "Chennai",
    "arrival_at": "Bangalore",
    "flight_ticket_price": 4648
  },
  {
    "id": 35,
    "takeoff_timestamp": "16/06/2021",
    "landing_timestamp": "16/06/2021",
    "duration": "2h",
    "departure_from": "Chennai",
    "arrival_at": "Mumbai",
    "flight_ticket_price": 3850
  },
  {
    "id": 36,
    "takeoff_timestamp": "15/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "2h",
    "departure_from": "Delhi",
    "arrival_at": "Pune",
    "flight_ticket_price": 2917
  },
  {
    "id": 37,
    "takeoff_timestamp": "15/06/2021",
    "landing_timestamp": "15/06/2021",
    "duration": "1h",
    "departure_from": "Pune",
    "arrival_at": "Mumbai",
    "flight_ticket_price": 2569
  },
  {
    "id": 38,
    "takeoff_timestamp": "17/06/2021",
    "landing_timestamp": "17/06/2021",
    "duration": "3h",
    "departure_from": "Mumbai",
    "arrival_at": "Delhi",
    "flight_ticket_price": 3200
  }
]

const renderApp = () => render(<FlightSearch flightsData={filghtsData}/>);

test('initial UI is rendered as expected', () => {
    let { getByTestId, queryByTestId } = renderApp();

    expect(getByTestId('source-input').value).toBeFalsy();
    expect(getByTestId('destination-input').value).toBeFalsy();
    expect(queryByTestId('flight-results')).toBeFalsy();
    expect(queryByTestId('no-flights')).toBeFalsy();
});

test('Flight search works as expected - search 1', () => {
    let { getByTestId, queryByTestId } = renderApp();

    const sourceInput = getByTestId('source-input');
    const destinationInput = getByTestId('destination-input');
    const searchButton = getByTestId('search-button');

    fireEvent.input(sourceInput, {
		  target: { value: 'chennai'}
    });
    
    fireEvent.input(destinationInput, {
      target: { value: 'mumbai'}
    });

    fireEvent.click(searchButton);
    
    const flightList = getByTestId('flight-results');
    const noFlightsDiv = queryByTestId('no-flights');

    expect(flightList).toBeTruthy();
    expect(flightList.children.length).toEqual(4);
    expect(flightList.children[0].children[0].textContent).toEqual('15/06/2021');
    expect(flightList.children[0].children[1].textContent).toEqual('4h');
    expect(flightList.children[0].children[2].textContent).toEqual('15/06/2021');
    expect(flightList.children[0].children[3].textContent).toEqual('6545');
    expect(flightList.children[1].children[0].textContent).toEqual('14/06/2021');
    expect(flightList.children[1].children[1].textContent).toEqual('4h');
    expect(flightList.children[1].children[2].textContent).toEqual('15/06/2021');
    expect(flightList.children[1].children[3].textContent).toEqual('4643');
    expect(noFlightsDiv).toBeFalsy();
});

test('Flight search works as expected - search 2', () => {
    let { getByTestId, queryByTestId } = renderApp();

    const sourceInput = getByTestId('source-input');
    const destinationInput = getByTestId('destination-input');
    const searchButton = getByTestId('search-button');

    fireEvent.input(sourceInput, {
		  target: { value: 'Chennai'}
    });
    
    fireEvent.input(destinationInput, {
		  target: { value: 'Bangalore'}
	  });

    fireEvent.click(searchButton);
    
    const flightList = getByTestId('flight-results');
    const noFlightsDiv = queryByTestId('no-flights');

    expect(flightList).toBeTruthy();
    expect(flightList.children.length).toEqual(5);
    expect(noFlightsDiv).toBeFalsy();
});

test('Shows No Flights Found when no matches found', () => {
    let { getByTestId, queryByTestId } = renderApp();

    const sourceInput = getByTestId('source-input');
    const destinationInput = getByTestId('destination-input');
    const searchButton = getByTestId('search-button');

    fireEvent.input(sourceInput, {
		  target: { value: 'Bangalore'}
    });
    
    fireEvent.input(destinationInput, {
      target: { value: 'Raipur'}
    });

    fireEvent.click(searchButton);
    
    const flightList = queryByTestId('flight-results');
    const noFlightsDiv = queryByTestId('no-flights');

    expect(flightList).toBeFalsy();
    expect(noFlightsDiv).toBeTruthy();
    expect(noFlightsDiv.textContent.trim()).toEqual('No flights found');
});

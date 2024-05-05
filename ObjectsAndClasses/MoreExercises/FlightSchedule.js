function flightSchedule (arr) {
   const [flights, cancelledFlights, searchStatus] = arr;
   const objCancelledFLights = [];
   const objFlightsReadyToFly = [];
   for (const flight of flights) {
       const [num, destination] = flight.split(' ');
       const currentFlight = {'Destination': destination, 'Status': 'Ready to fly'};
       for (const canceledFlight of cancelledFlights) {
           const [flightNum, canceledStatus] = canceledFlight.split(' ');
           if (flightNum === num) {
               currentFlight.Status = canceledStatus;
               break;
           }
       }

       (currentFlight.Status === 'Cancelled') ?
           objCancelledFLights.push(currentFlight):
           objFlightsReadyToFly.push(currentFlight);

   }

   return (searchStatus[0] === 'Cancelled') ?
       objCancelledFLights.map(flight => `{ Destination: '${flight.Destination}', Status: '${flight.Status}' }`).join('\n') :
       objFlightsReadyToFly.map(flight => `{ Destination: '${flight.Destination}', Status: '${flight.Status}' }`).join('\n');
}

console.log(flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'],
    ['Cancelled']
]	))

console.log(flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'],
    ['Ready to fly']
]))

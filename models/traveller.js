const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  const startLocation = this.journeys.map((journey) => {
    return journey.startLocation;
  })
  return startLocation;
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeyByTransport = this.journeys.filter((journey) => {
    return transport === journey.transport;
  })
  return journeyByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
    const journeyByDistance = this.journeys.filter((journey) => {
      return minDistance <= journey.distance;
    })
    return journeyByDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let totalDistance = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal += journey.distance;
  }, 0)
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportMode = getJourneysByTransport()
    
    //make new array of just journeys.transport
    //element, index, array
};
  // const mapTransport = this.journeys.map((journey) => {
  //   return journey.transport;
  // })
  //   const modesOfTransport = this.journeys.sort(function(journey) {
  //     return journey.transport
  //   });
  //   return modesOfTransport
  // };
  // const modesOfTransport = this.journeys.filter((journey, i, a) => a.indexOf(journey) == i)
  // return modesOfTransport



  // const modesOfTransport = function unique(journey) {
  //   return journey.sort().filter(function(item, pos, arr) {
  //     return !pos || item !== arr[pos - 1];
  //   })
  //   return modesOfTransport
  // }
  // const modesOfTransport = this.journeys.map((journey) => {
  //   return journey.transport;
  //
  // })
  // return modesOfTransport;
  //


//find the first letter of the value of each string,
//

module.exports = Traveller;

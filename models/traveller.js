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

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;

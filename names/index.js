let names = require("../country/state/city/index");

let firstNames = require("../utilities/utils/index");

function getPeopleInCity(names) {
  return firstNames(names);
}

module.exports = getPeopleInCity;

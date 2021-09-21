// Declare variable returnFirstTwo drivers with const and assign an anonymous function
const returnFirstTwoDrivers = function (firstDrivers) { //function should accept an array of drivers as an arguement
    return firstDrivers.slice(0, 2)
} 
// and return the first two drivers in an array

// Declare a variable returnLastTwoDrivers with const that is assigned to anonymous function
const returnLastTwoDrivers = function (lastDrivers) { //function should accept an array of drivers and return the last two drivers in the array
    return lastDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Declare higher-order function, createFareMultiplier that takes in one argument, an integer

function createFareMultiplier (integer) {
    return function (fare) {
        return fare * integer
    }
} 
// return a function that takes in the fare 

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers);
}
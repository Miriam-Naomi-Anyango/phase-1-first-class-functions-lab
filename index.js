// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(){
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = fareMultiplier => {
    return (fare) => fareMultiplier * fare
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (dirivers, returnFirstTwoDrivers) => returnFirstTwoDrivers(drivers);
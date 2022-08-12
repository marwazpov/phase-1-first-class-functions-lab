const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers= function(array){
    return array.slice(0,2);
}

const returnLastTwoDrivers= function(array){
    return array.slice(array.length-2, array.length)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare){
    const fareMultiplier = function(multiplier) {
        return fare * multiplier;
    };
    return fareMultiplier;
}

const fareDoubler= function(fare){
    createFareMultiplier(fare);
    return fare*2;
}

const fareTripler = function(fare) {
    createFareMultiplier(fare);
    return fare*3;
}

function selectDifferentDrivers(drivers, selection) {
    return selection(drivers)
}
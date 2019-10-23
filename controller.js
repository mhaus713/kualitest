import Elevator from 'elevator.js'

// controller class for all elevators. Provides commands for each elevator to operate, as well as methods to check if elevator can function or not

export class ElevatorController {
    constructor(numFloors, numElevators) {
        this.groundFloor = 1;
        this.elevators = [];
        this.topFloor = numFloors;
    }

    // Creates elevators and puts them into elevators array (only used at beginning
    instantiateElevators(numElevators) {

    }

    

}
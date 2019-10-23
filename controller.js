import Elevator from 'elevator.js'

// controller class for all elevators. Provides commands for each elevator to operate

export class ElevatorController {
    constructor(numFloors, numElevators) {
        this.groundFloor = 1;
        this.elevators = [];
        this.topFloor = numFloors;
    }
}
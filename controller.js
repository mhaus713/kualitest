import Elevator from 'elevator.js'

// controller class for all elevators. Provides commands for each elevator to operate, as well as methods to check if elevator can function or not

export class ElevatorController {
    constructor(numFloors, numElevators) {
        this.groundFloor = 1;
        this.elevators = [];
        this.topFloor = numFloors;
        // iteration used purely to check if it's the first iteration or not for efficiency
        this.iteration = 0;

        this.instantiateElevators(numElevators);
    }

    // Creates elevators and puts them into elevators array (only used at beginning)
    instantiateElevators(numElevators) {
        for (i = 0; i < numElevators; i++) {
            let elevator = new Elevator();
            this.elevators.push(elevator);
        }
    }

    // Checks current floors of elevators and returns nearest elevator that isn't occupied
    getNearestElevator(requestedFloor) {
        if (this.iteration === 0) {
            return this.elevators[0];
        }

        let nearest;

        for (i = 0; i < elevators.length; i++) {

        }
    }

    // Sends request to have elevator go to floor and sends nearest elevator to that floor
    requestFloor(floorNum) {

    }

}
import Elevator from 'elevator.js'

// controller class for all elevators. Provides commands for each elevator to operate, as well as methods to check if elevator can function or not


export class ElevatorController {
    constructor(numFloors, numElevators) {
        this.groundFloor = 1;
        // floors is an array of arrays where each index is an array of elevators representing each floor
        this.floors = [];
        this.topFloor = numFloors;
        // iteration used purely to check if it's the first iteration or not for efficiency
        this.iteration = 0;

        this.instatiateFloors(numFloors);
        this.instantiateElevators(numElevators);
    }

    // creates an array at each floor where elevators can be stored
    instantiateFloors(numFloors) {
        for (i = 0; i < numFloors; i++) {
            let array = [];
            this.floors.push(array);
        }
    }

    // Creates elevators and puts them into elevators array at floor 1 (only used at beginning)
    instantiateElevators(numElevators) {
        for (i = 0; i < numElevators; i++) {
            let elevator = new Elevator();
            this.floors[0].push(elevator);
        }
    }

    // Checks current floors of elevators and returns index of nearest elevator that isn't occupied
    getIndexNearestElevator(requestedFloor) {
        if (this.iteration === 0) {
            return this.iteration;
        }

        let indexNearest;

        let above = requestedFloor + 1;
        let below = requestedFloor - 1;

        // Function is going to check if elevator at requested floor then work outwards down and up until finds elevator nearest floor
        // At best, search will be O(1), at worst will be O(n) where n is floors I think?

        if (this.floors[requestedFloor].length >= 1) {
            return requestedFloor;
        }

        for (i = 0; i < this.floors.length; i++) {
            
        }
    }

    // Sends request to have elevator go to floor and sends nearest elevator to that floor
    requestFloor(floorNum) {

    }

}
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

        this.instantiateFloors(numFloors);
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
        // At best, search will be O(1), at worst will be O(numElevators*n) where n is floors I think?

        if (this.floors[requestedFloor].length >= 1) {
            return requestedFloor;
        }

        // checks length of array at index above or below and returns if it finds a non empty array
        for (i = 0; i < this.floors.length; i++) {
            if (this.floors[above].length !== 0 && above <= this.topFloor) {
                // need to check if elevator at floor is occupied use checkElevatorsAtIndex
                return above;
            } else {
                above++;
            }
            if (this.floors[below].length !== 0 && below >= this.groundFloor) {
                // same Check as above
                return below;
            } else {
                below--;
            }
        }
    }

    // checks if elevators are empty at floor index floorNum and returns false if they are occupied, returns index of elevator at current floor if elevator is not occupied
    checkElevatorsAtIndex(floorNum) {
        let elevatorAt = this.floors[floorNum];
        for (i = 0; i < elevatorAt.length; i++) {
            if (!elevatorAt[i].getMaintenanceMode()) {
                return i;
            }
        }
        return false;
    }

    // Sends request to have elevator go to floor and sends nearest elevator to that floor. Removes elevator at array and moves that elevator to array at floorNum
    requestFloor(floorNum) {
        let nearest = this.getIndexNearestElevator(floorNum);

    }

}
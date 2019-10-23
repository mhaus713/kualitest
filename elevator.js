// elevator class that provides simulation methods to control each elevator

export default class Elevator {
    constructor() {
        this.maintenanceMode = false;
        this.numTrips = 0;
        this.numFloorsTravelled = 0;
        this.maxFloorsTravelled = 100;
        this.currentFloor = 1;
        this.occupied = false;
        this.moving = false;
    }

    //**** START OF REPORTER METHODS ***//

    reportOpen() {
        return 'Door opened';
    }

    reportClose() {
        return 'Door closed';
    }

    reportMove(floorNum) {
        return 'moved to floor ' + floorNum;
    }

    //*** START OF GETTER METHODS ***//

    getCurrentFloor() {
        return this.currentFloor;
    }

    getNumTrips() {
        return this.numTrips;
    }

    getFloorsTravelled() {
        return this.numFloorsTravelled;
    }

    getCurrentFloor() {
        return this.currentFloor;
    }

    getMaintenanceMode() {
        return this.maintenanceMode;
    }

    getOccupied() {
        return this.occupied;
    }

    getMoving() {
        return this.moving;
    }

    //*** START OF SETTER METHODS ***//

    setMaintenanceMode() {
        this.maintenanceMode = true;
    }

    setMoving() {
        this.moving = !this.moving;
    }

    iterateFloorsTravelled() {
        this.numFloorsTravelled++;
    }

    //*** START OF OPERATIONAL METHODS ***//

    // sends elevator to floor floorNum
    goToFloor(floorNum) {
        // check if current floor is greater or less than floor number to increment or decrement
        // loops for how many floors it is passing and reports moved to floor _____ of current floor num
        // once it reaches floor opens door and changes to occupied and closes door
        // if total floor count goes past 100 puts into maintenance mode

        // this doesn't prevent from picking people up and moving to floor --- need to account for that
    }
}
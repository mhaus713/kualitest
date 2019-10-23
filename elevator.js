// elevator class that provides simulation methods to control each elevator

export class Elevator {
    constructor() {
        this.maintenanceMode = false;
        this.numTrips = 0;
        this.numFloorsTravelled = 0;
        this.maxFloorsTravelled = 100;
        this.currentFloor = 1;
        this.occupied = false;
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

    //*** START OF SETTER METHODS ***//

    setMaintenanceMode() {
        this.maintenanceMode = true;
    }

    iterateFloorsTravelled() {
        this.numFloorsTravelled++;
    }

    //*** START OF OPERATIONAL METHODS ***//

    goToFloor(floorNum) {

    }
}
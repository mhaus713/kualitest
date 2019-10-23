// elevator class that provides simulation methods to control each elevator

export class Elevator {
    constructor(topFloor, ) {
        this.maintenanceMode = false;
        this.numTrips = 0;
        this.numFloors = 0;
        this.topFloor = topFloor;
        this.maxFloorsTravelled = 100;
        this.currentFloor = 1;
    }

    reportOpen() {
        return 'open';
    }

    reportClose() {
        return 'close';
    }

    reportMove(floorNum) {
        return 'moved to floor' + floorNum;
    }

    getCurrentFloor() {
        return this.currentFloor;
    }

    getNumTrips() {
        return this.numTrips;
    }

    getFloorsPassed() {
        return 
    }

    getMaintenanceMode() {
        return this.maintenanceMode;
    }

    goToFloor(floorNum) {

    }
}
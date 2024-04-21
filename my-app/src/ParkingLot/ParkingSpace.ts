import { VehicleType } from "./VehicleType";

export default abstract class ParkingSpace {
    parkingSpaceType : VehicleType;
    parkingSpace : Map<string, string>;

    abstract findEmptyParkingSpace() : string;

    getParkingSpaceType() : VehicleType{
        return this.parkingSpaceType;
    }

    updateState(id : string, vNumber : string = null){
        vNumber ? this.parkingSpace.set(id, vNumber) : this.parkingSpace.set(id, 'empty');
    }
}
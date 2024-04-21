import { VehicleType } from "./VehicleType";
import ParkingSpace from "./ParkingSpace";
import _2WheelerParkingSpace from "./_2WheelerParkingSpace";
import _4WheelerParkingSpace from "./_4WheelerParkingSpace";


export default class ParkingSpaceFactory {
    static getParkingSpace(vehicleType : VehicleType) : ParkingSpace{
        if(vehicleType == VehicleType._2Wheeler)
        {
            return _2WheelerParkingSpace.getInstance();
        }
        else return _4WheelerParkingSpace.getInstance();
    }
}
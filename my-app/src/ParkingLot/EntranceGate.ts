import { VehicleType } from "./VehicleType";
import ParkingSpace from "./ParkingSpace";
import Ticket from "./Ticket";
import { GatePurpose } from "./GatePurpose";
import IGate from "./IGate";
import ParkingSpaceFactory from "./ParkingSpaceFactory";

export default class EntranceGate implements IGate{
    gateNumber: number;
    purpose: GatePurpose;

    private constructor(){
        this.gateNumber = 1;
        this.purpose = GatePurpose.entry;
    }

    private static findParkingSpace(vehicleType : VehicleType, parkingSpace: ParkingSpace) : string {
        let spaceId = parkingSpace.findEmptyParkingSpace();
        return spaceId;
    }

    private static updateParkingSpaceState(spaceId : string, parkingSpace : ParkingSpace, vNumber : string = 'empty'){
        parkingSpace.updateState(spaceId, vNumber);
    }

    static generateTicket(entryTime : Date, vehicleType : VehicleType, vNumber : string) : Ticket{
        let parkingSpace = ParkingSpaceFactory.getParkingSpace(vehicleType);
        let spaceId = this.findParkingSpace(vehicleType, parkingSpace);
        this.updateParkingSpaceState(spaceId, parkingSpace, vNumber);
        return new Ticket(entryTime, vNumber, vehicleType, spaceId);
    }
}
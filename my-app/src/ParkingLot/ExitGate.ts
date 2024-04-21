import { VehicleType } from "./VehicleType";
import Ticket from "./Ticket";
import { GatePurpose } from "./GatePurpose";
import IGate from "./IGate";
import ParkingSpaceFactory from "./ParkingSpaceFactory";

export default  class ExitGate implements IGate{
    gateNumber: number;
    purpose: GatePurpose;
    

    private constructor(){
        this.gateNumber = 2;
        this.purpose = GatePurpose.exit;
    }

    static calculateCost(ticket : Ticket) : number{
        let entryTime = ticket.getEntryTime();
        let vehicleType = ticket.getVehicleType();

        let exitTime = Date.now();

        let costPerMinute = vehicleType == VehicleType._2Wheeler ? 40 : 60;

        let durationinMs = (exitTime - entryTime.getTime());
        let durationinMintutes = durationinMs / (1000 * 60);

        let totalCost = durationinMintutes * costPerMinute;

        return totalCost;
    }

    static exitComplete(ticket : Ticket) : string{
        let totalCost = this.calculateCost(ticket);
        totalCost = parseInt(totalCost.toFixed(2));
        let status = this.checkPayComplete(totalCost);
        ParkingSpaceFactory.getParkingSpace(ticket.getVehicleType()).updateState(ticket.getParkingSpaceId());

        if(status)
        {
            return `payment of ${totalCost} completed for Vehicle:${ticket.getVNumber()}. Marking Exit complete`;
        }
        else
        {
            return `error in payment for Vehicle:${ticket.getVNumber()}. Marking Exit incomplete`;
        }
    }

    static checkPayComplete(totalCost : number) : boolean {
        let status = `payment of ${totalCost} completed`;
        return true;
    }
}
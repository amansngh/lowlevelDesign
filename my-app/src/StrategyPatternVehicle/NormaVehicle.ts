import { Vehicle } from "./Vehicle";
import { NormalDrivingStrategy } from "./Strategies/NormalDrivingStrategy";

export class NormalVehicle extends Vehicle
{
    constructor()
    {
        super(new NormalDrivingStrategy());
    }
}
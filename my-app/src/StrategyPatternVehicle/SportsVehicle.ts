import { Vehicle } from "./Vehicle";
import {SportsDrivingStrategy} from "./Strategies/SportsDrivingStrategy"


export class SportsVehicle extends Vehicle
{
    constructor()
    {
        super(new SportsDrivingStrategy());
    }
}
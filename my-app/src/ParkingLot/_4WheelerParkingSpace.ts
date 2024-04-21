import { VehicleType } from "./VehicleType";
import ParkingSpace from "./ParkingSpace";

export default class _4WheelerParkingSpace extends ParkingSpace{
    private static _instance : _4WheelerParkingSpace;
    
    constructor(){
        super();
        
        this.parkingSpaceType = VehicleType._4Wheeler;
        this.parkingSpace = new Map<string, string>();

        for(let i = 0; i < 100; i++){
            this.parkingSpace.set(i.toString(), 'empty');
        }
    }

    findEmptyParkingSpace(): string {
        this.parkingSpace.forEach((value, key) => {
            if(value == 'empty')
            {
                return key;
            }
        })

        return 'space-full';
    }

    static getInstance() : _4WheelerParkingSpace{
        if(this._instance == null)
        {
            this._instance = new _4WheelerParkingSpace();
        }
        
        return this._instance;
    }

}
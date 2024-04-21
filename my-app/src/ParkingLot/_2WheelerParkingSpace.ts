import { VehicleType } from "./VehicleType";
import ParkingSpace from "./ParkingSpace";

export default class _2WheelerParkingSpace extends ParkingSpace{
    private static _instance : _2WheelerParkingSpace;

    private constructor(){
        super();
        
        this.parkingSpaceType = VehicleType._2Wheeler;
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

    static getInstance() : _2WheelerParkingSpace{
        if(this._instance == null)
        {
            this._instance = new _2WheelerParkingSpace();
        }
        
        return this._instance;
    }
}
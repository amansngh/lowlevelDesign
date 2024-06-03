
// class ElevatorManager implements IElevatorManager
// {
//     private _maxFloor : number;
//     private _elevators : Array<Elevator>;
//     private _freeElevators : Map<Elevator, number>;
//     private _busyElevators : Map<Elevator, Array<number>>;

    

//     constructor(elevators : Array<Elevator>, maxfloor : number)
//     {
//         this._maxFloor = maxfloor;
//         this._elevators = elevators;
//         this._freeElevators = new Map<Elevator, number>();
//         this._busyElevators = new Map<Elevator, Array<number>>();
//         this._elevators.forEach(elevator => {
//            this._freeElevators.set(elevator, 0);
//         });
//     }


//     async fetchElevator(currentfloor : number, direction : MovementType): Promise<number> {
//         var freeEle = this.fetchClosestFreeElevator(currentfloor, direction);
//         if(this._freeElevators.has(freeEle))
//             {
//                 this._freeElevators.delete(freeEle);
//                 freeEle._direction = direction;
                
//             }
//         else
//         {
//             //this.calculateInBetweenFloors()
//             //Await elevator coming time then press destinations and then do rest shit.
//         }

//         await this.elevatorArrivalTime(freeEle, currentfloor);
//         return freeEle.getEnumber();
        
//         return 0;
//     }

//     async pressedDestination(elevator : Elevator, currentfloor : number, destinationFloor : number)
//     {
//         var floors = this.calculateInBetweenFloors(currentfloor, destinationFloor);
//         this._busyElevators.set(elevator, floors);
//         await this.startEngagement(elevator, currentfloor, destinationFloor);
//         this._busyElevators.delete(elevator);
//         this._freeElevators.set(elevator, destinationFloor);

//     }

//     fetchClosestFreeElevator(currentfloor : number, direction : MovementType) : Elevator {
//         var e; 
//         let minD = 100;

//         this._busyElevators.forEach((floors, eleV) => {
//             floors.forEach((floor) => {
//                 if(floor == currentfloor && direction == eleV._direction) 
//                     {
//                         return eleV;
//                     }
//             })
//         })

//         this._freeElevators.forEach((floor, eleV) => {
//             if(minD > Math.abs(currentfloor-floor))
//                 {
//                     minD = Math.abs(currentfloor-floor);
//                     e = this._freeElevators.get(eleV);
//                 }
            
//         });

//         return e;
//     }

//     calculateInBetweenFloors(currentfloor : number, destinationFloor : number) : Array<number>
//     {
//         let floors = Array<number>();
//         let i = currentfloor < destinationFloor ? currentfloor+1 : currentfloor-1;
//         if(currentfloor < destinationFloor)
//         {
//             while( i <= destinationFloor)
//                 {
//                     floors.push(i);
//                     i++
//                 }
                
//         }
//         else
//         {
//             while(i >= destinationFloor)
//                 {
//                     floors.push(i);
//                     i--;
//                 }

//         }

//         return floors;
//     }

//     async startEngagement(elevator : Elevator, currentfloor : number, destinationFloor : number)
//     {
//         let engTime = this.engTime(destinationFloor, currentfloor);
//         while(engTime)
//             {
//                 engTime--;
//             }
//     }

//     async elevatorArrivalTime(elevator : Elevator, currentfloor : number)
//     {
//         var engTime = 0;
//         if(this._freeElevators.has(elevator))
//             {
//                 engTime = this.engTime(this._freeElevators.get(elevator), currentfloor);
//             }
//         else
//         {
//             var floors = this._busyElevators.get(elevator);
//             var minD = 100;
//             floors.forEach(floor => {
//                 if (minD > Math.abs(currentfloor - floor))
//                     {
//                         minD = Math.abs(currentfloor - floor);
//                         engTime = this.engTime(floor, currentfloor);
//                     }
//             })

//             while(engTime)
//                 {
//                     engTime--;
//                 }
//         }
//      }

//      engTime(val1 : number, val2 : number) : number
//      {
//         return Math.abs(val1 - val2) * 1000;
//      }
// }
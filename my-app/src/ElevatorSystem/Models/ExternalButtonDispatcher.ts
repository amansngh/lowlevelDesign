class ExternalButtonDispatcher
{
    _elevatorHandlers : ElevatorHandler[];
    
    constructor(elevatorHandlers ?: ElevatorHandler[])
    {
        if(elevatorHandlers)
            {
                this._elevatorHandlers = elevatorHandlers;
            }
        else{
            let elevator1 = new Elevator(1);
            let elevatorHandler1 = new ElevatorHandler(elevator1);

            let elevator2 = new Elevator(2);
            let elevatorHandler2 = new ElevatorHandler(elevator2);

            this._elevatorHandlers = new Array<ElevatorHandler>();

            this._elevatorHandlers.push(elevatorHandler1);
            this._elevatorHandlers.push(elevatorHandler2);

        }
    }

    submitRequest(floorNumber : number, dir : Direction)
    {
        //for simplicity, i am following even odd,
        this._elevatorHandlers.forEach(elevatorHandler => {
            let id  = elevatorHandler._elevator.getEnumber();
            if(id % 2 == 1 && floorNumber %2 == 1 )
                {
                    elevatorHandler.submitExternalRequest(floorNumber, dir);
                }
            else if(id % 2 == 0 && floorNumber % 2 == 0)
                {
                    elevatorHandler.submitExternalRequest(floorNumber, dir);
                }
        });

    }
}
interface IElevatorManager
{
    fetchElevator(currentfloor : number, destinationFloor : number) : Promise<number>;
}
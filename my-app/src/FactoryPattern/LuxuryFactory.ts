class LuxuryFactory implements IVehicleFactory{
    getVehicle(choice : number): IVehicle {
        if(choice == 1)
        {
            return new Mercedes();
        }
        else
        {
            return new Audi();
        }
    }
}
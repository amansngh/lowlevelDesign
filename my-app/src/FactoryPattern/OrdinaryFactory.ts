class OrdinaryFactory implements IVehicleFactory{
    getVehicle(choice : number): IVehicle {
        if(choice == 1)
        {
            return new Suzuki();
        }
        else
        {
            return new Hyundai();
        }
    }
}
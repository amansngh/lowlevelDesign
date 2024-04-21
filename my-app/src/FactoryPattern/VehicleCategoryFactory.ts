class VehicleCategoryFactory implements IVehicleCategoryFactory
{
    getVehicleFactory(category: string): IVehicleFactory {
        if(category.toLowerCase() == 'luxury')
        {
            return new LuxuryFactory();
        }
        else
        {
            return new OrdinaryFactory();
        }
    }
}
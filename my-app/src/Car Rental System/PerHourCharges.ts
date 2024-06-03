class PerHourCharges{
    static perHourCharges(vehicleType : VehicleType) : number
    {
        switch(vehicleType)
        {
            case VehicleType.BasicBike :
                return 300;
            case VehicleType.BasicCar :
                return 1000;
            case VehicleType.PremiumBike :
                return 500;
            case VehicleType.PremiumCar :
                return 1500;
            case VehicleType.Travellor :
                return 1200;
            default : return 700;

        }
    }
}
class Main{
    static execute() : any
    {
        var u1 = new User("Aman Singh", "a@a.com");
        var u2 = new User("Baman Singh", "b@b.com");

        var UD = UserDirectory.instance();
        UD._users.push(u1, u2);

        var v1 = new Vehicle(VehicleType.BasicBike, "JH09KS8877", FuelType.Petrol, "10");
        var v2 = new Vehicle(VehicleType.PremiumCar, "JH09KS8899", FuelType.Petrol, "60");
        var v3 = new Vehicle(VehicleType.BasicCar, "TS09KS8899", FuelType.Petrol, "60");
        var v4 = new Vehicle(VehicleType.PremiumBike, "PB09KS8899", FuelType.Petrol, "60");


        var store1Location = new LLocation(26.56, 58.67);
        var store1Vs = new Array<Vehicle>(v1, v3);
        var store2Vs = new Array<Vehicle>(v2, v4);
        var store2Location = new LLocation(30.56, 22.67);
        var store1 = new StorePoint("001", store1Location, store1Vs);
        var store2 = new StorePoint("002", store2Location, store2Vs);

        var ivd = IdleVehicleDirectory.instance();
        ivd._idleVehicles.push(new IdleVehicle(v1, store1._id, Status.idle));
        ivd._idleVehicles.push(new IdleVehicle(v3, store1._id, Status.idle));
        ivd._idleVehicles.push(new IdleVehicle(v2, store2._id, Status.idle));
        ivd._idleVehicles.push(new IdleVehicle(v4, store2._id, Status.idle));

        var vsm = VehicleAssignManager.instance();
        var k = vsm.listVehiclesByType(VehicleType.BasicCar);

        var rID = vsm.makeReservation(u1, v3, store2._id);
        store2.startRide(rID);

        return k;

        //store2.endRide(rID);

    }
}
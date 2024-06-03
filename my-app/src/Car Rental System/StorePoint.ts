class StorePoint {
    _id : string;
    _vehicles : Vehicle[];
    _location : LLocation;
    _userDirectory : UserDirectory;
    _reservationDirectory : ReservationDirectory;
    _vehicleAssignManager : VehicleAssignManager;


    constructor(id : string, location : LLocation, vehicles ?: Vehicle[])
    {
        this._id = id;
        this._vehicles = vehicles ? vehicles : new Array<Vehicle>();
        this._location = location;
        this._userDirectory = UserDirectory.instance();
        this._reservationDirectory = ReservationDirectory.instance();
        this._vehicleAssignManager = VehicleAssignManager.instance();
    }
    
    verifyReservation(reservationDetails : ReservationDetails) : boolean
    {
        return this._reservationDirectory.verifyReservation(reservationDetails);
    }

    verifyReservationByID(id : string) : boolean
    {
        return this._reservationDirectory.verifyReservationByID(id);
    }

    verifyReservationByUserOnly(email : string, date: Date) : boolean
    {
        var user = this._userDirectory.getUser(email);
        if(user instanceof User)
            {
                var list = this._reservationDirectory.fetchReservations(user);
                list.forEach(item => {
                    if(item._date == date)
                        {
                            return true;
                        }
                });
            }
        return false;
    }

    startRide(reservationId : string)
    {
        this.verifyReservationByID(reservationId);
        var reservation = this._reservationDirectory.fetchReservationByID(reservationId);

        this._vehicleAssignManager.assignVehicle(reservation._vehicle, reservation._user);
    }

    endRide(reservationId : string)
    {
        var reservation = this._reservationDirectory.fetchReservationByID(reservationId);
        var bill = this.generateBill(reservationId);
        this._vehicleAssignManager.deAssignVehice(reservation._vehicle, this._id);
    }

    generateBill(reservationId : string) : Bill
    {
        var reservation = this._reservationDirectory.fetchReservationByID(reservationId);
        var currentTime = new Date(Date.now());
        var totalTime = currentTime.getTime() - reservation._date.getTime();
        var totalHrs = (totalTime/3600*1000);
        var amount = totalHrs * PerHourCharges.perHourCharges(reservation._vehicle._vehicleType);
        return new Bill(reservation._user, reservation._vehicle, amount);
    }
}
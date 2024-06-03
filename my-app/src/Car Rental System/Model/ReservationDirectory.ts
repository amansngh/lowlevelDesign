class ReservationDirectory{
    _reservations : ReservationDetails[];
    static _instance : ReservationDirectory;

    private constructor()
    {
        this._reservations = new Array<ReservationDetails>();
    }

    static instance() : ReservationDirectory{
        if(!this._instance)
            {
                this._instance = new ReservationDirectory();
            }

        return this._instance;
    }

    verifyReservation(reservationDetails : ReservationDetails) : boolean
    {
        this._reservations.forEach(resevation => {
            if(resevation._id == reservationDetails._id)
                {
                    return true;
                }
        });

        return false;
    }

    verifyReservationByID(id : string) : boolean
    {
        var r = this.fetchReservationByID(id);
        return r ? this.verifyReservation(r) : false;
    }

    fetchReservations(user : User) : ReservationDetails[]
    {
        var result = new Array<ReservationDetails>();
        this._reservations.forEach(resevation => {
            if(resevation._user == user)
                {
                    result.push(resevation);
                }
        });

        return result;
    }

    fetchReservationByID(id : string) : ReservationDetails
    {
        this._reservations.forEach(resevation => {
            if(resevation._id == id)
                {
                    return resevation;
                }
        });

        return null;
    }
}
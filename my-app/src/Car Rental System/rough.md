We will design a rough flow for a car rental system.


Requirements:
1. EndGoal: We should be able to rent a basic or premium car and get a car assigned. 
2. Search : He should get a list of nearby to location pick up and drop points filtered.
3. Reserve 

Objects :
User <name, email>
Location. <xcoordinate, ycoordinate>
CarType : Basic Premium. | Scalabale | VehicleType <BasicCar, PremiumCar, BasicBike, PremiumBike, Traveller>
FuelType <Petrol, Diesel, CNG, EV>
Car. has CarType, CarNumber, Fuel, FuelType.  | Vehicle
StorePoint : Pick and up and Drop points.
StorePoint has List of Cars, Location. ReservationDetails<User, Car> StartRide, EndRide.
Idle Car Directory. List of Cars : Location, Fuel.
Reserved Car Directory. ReservationDetails<User, Car, StorePoint>
Busy Car Directory. List of Cars : User : CarNumber: UsageStartTime.  
Car Assigner.  has Idle Car Directory, Busy Car Directory, User. ShowListOfVehicles with pick up points. Reserve Vehicle. 
User will choose a store point and location, and this will assign it to the user. and mark engaged in directory.
Rent Calculator + DamageValidator(add any charges).
Rent | Bill
Payment




From Video:
ReservationStatus Completed, Cancelled, Scheduled.
BookedFrom : BookedTill
UserDrivingLicense and Id.
BillStatus isPaid


Learnings 

Goal is to use Design Patterns. Scalabale. Decoupled. Strategy. Factory. Observer.

I have centrailised managed the vehicles and inventories.
Interviewer would like to see some containement and refinement.
Each Store should manage their vehicle and should have InventoryManagementSystem.
RentalSystem should add User add Stores CUD etc.
Payment Should have bill.
Bill Class should have self bill computation based on params.
Listing of vehicle should be decoupled into a separate class so logic can change.
update reservartion and mark status completed.
remove singleton use.
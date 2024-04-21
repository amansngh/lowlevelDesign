//Design a parking lot LLD.

Functionality of entry and exit tokens.
Time Based calculation and Empty Space Allocation.


DB -- SPACE ALLOCATOR CLASS to give me next space.
ParkingLotEntry Has a Space allocator object.
Time and car number punched in.
ParkingLotExit will have de-allocator of that space, and fees based on entry and exit time.
Payment Class



Requirement Gathering :
1. How many entrances we have? Currently 1 but should be scalable in future.
2. How many exits we have? 1
3. Hourly or Minutes based charge? Mixed.


Classes and Functionalities:
Vehicle. (Vehicle Number, VehicleType (2, 4) )
Ticket. (EntryTime, ParkingSpotAllocated)
EntranceGate. (FindParkingSpace, Update ParkingSpace state and generate ticket)
FindParkingSpace can be algorithmic hard based on entrances and floors to find nearest.

ExitGate. (CostCalculate, TakePayment and de-allocate space)
ParkingSpotType (2 wheelers, 4 wheelers) // extensible to 10 etc. (Id, Price, State, Type, Vehicle?)

Payment
PaymentStrategies.

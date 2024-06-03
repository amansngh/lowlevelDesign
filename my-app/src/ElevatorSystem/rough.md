ElevatorSystem

Thoughts
1. List of Elevators.
2. Person on floor x presses destination as y and 0 <= x, y <= n;
3. Closest elevator comes on x;

Objects
1. Elevator
2. UserAction
3. MovemenType Up / Down


Logic.
2. ElevatorManager has List<Elevator>
3. ElevatorManager has [0, n] floor.
4. ElevatorManager has Map[Elevator] : floor;
5. UserAction(MovemenType, int currentFloor) triggers --> EM --> Closest and returns if it is free else get next closest;
6. FreeMap[Elevator]:floor + BusyMap[Elevator] : floor = Map[Elevator] : floor;
6.1 We need busyElevator(start , final and direction or floors in between);
7. If User is inside a Elevator make it busy, remove from free and add to busy;
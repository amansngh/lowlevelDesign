export class Vehicle
{
    private driveStrategy : DrivingStrategy;

    constructor(driveStrategy : DrivingStrategy)
    {
        this.driveStrategy = driveStrategy;
    }

    displayValue() : string
    {
        return this.driveStrategy.drive();
    }
}
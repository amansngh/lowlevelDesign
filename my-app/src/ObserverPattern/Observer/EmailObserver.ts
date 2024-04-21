import User from "../User";
export class EmailObserver implements IStockObserver
{
    private user : User;
    private observable : IStockObservable;

    constructor(user : User, observable : IStockObservable)
    {
        this.user = user;
        this.observable = observable;
    }

    update() : string[] {
        let users = this.user.getUsers();
        let output: string[] = [];
        users.forEach((user: any) => {
            output.push(`\n Sending email for ${user} with data ${this.observable.getdata()} \n`);
        });

        return output;
    }
}
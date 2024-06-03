import Transaction from "./Transaction";

export default class Account {
    _id : string;
    _name : string;
    _accountBalance : number;
    _accountTransactions : Map<string, Transaction>;

    constructor(id : string, name : string, accountBalance : number)
    {
        this._id = id;
        this._name = name;
        this._accountBalance = accountBalance;
        this._accountTransactions = new Map<string, Transaction>();
    }
}
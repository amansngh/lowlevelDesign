import Account from "./Account";
import { TransactionType } from "./TransactionType";

export default class Transaction{
    _id : string;
    _type : TransactionType;
    _fromAccount : Account;
    _toAccount : Account;
    _time : number;
    _amount : number;

    constructor(id : string, ttype : TransactionType, fromA : Account, toA : Account, time : number, amount : number)
    {
        this._id = id;
        this._type = ttype;
        this._fromAccount = fromA;
        this._toAccount = toA;
        this._time = time;
        this._amount = amount;
    }
}
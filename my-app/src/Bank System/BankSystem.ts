import Account from "./Models/Account";
import Transaction from "./Models/Transaction";
import { TransactionType } from "./Models/TransactionType"; 

export default class BankSystem
{
    _accountsList : Map<string, Account>;
    _completedTransactionList : Map<string, Transaction>;
    _pendingTransactionList : Map<string, Transaction>;
    _totalAccount : number;
    _totalTransactions : number;
    _expiryTime : number;

    constructor()
    {
        this._accountsList = new Map<string, Account>();
        this._completedTransactionList = new Map<string, Transaction>();
        this._pendingTransactionList = new Map<string, Transaction>();
        this._totalAccount = 0;
        this._totalTransactions = 0;
        this._expiryTime = 864500;
    }

    createAccount(accountHolderName : string, initialBalance : number, time : number) : string
    {
        var id = this.generateAccountID();
        var acc = new Account(id, accountHolderName, initialBalance);
        this._accountsList.set(id, acc);
        console.log("Account has been created for " + accountHolderName + "with account number " + id);
        var tid = this.generateTransactionID();
        var T = new Transaction(tid, TransactionType.Deposit, acc, acc, time, initialBalance);
        this._completedTransactionList.set(tid, T);
        return id;
    }

    deleteAccount(id : string)
    {
        this._accountsList.forEach(element => {
            if(element._id == id)
                {
                    this._accountsList.delete(id);
                }
        });
    }

    deposit(accountId : string, amount : number, time : number) : string
    {
        var tid = this.generateTransactionID();
        var acc = this._accountsList.get(accountId);
        if(acc == null)
            {
                return "Account Not found";
            }
        var T = new Transaction(tid, TransactionType.Deposit, acc, acc, time, amount);
        acc._accountBalance += amount;
        this._completedTransactionList.set(tid, T);
        acc._accountTransactions.set(tid, T);
        this._accountsList.set(accountId, acc);
        return "Deposit Done";
    }

    withdraw(accountId : string, amount : number, time : number) : string
    {
        var tid = this.generateTransactionID();
        var acc = this._accountsList.get(accountId);
        if(acc == null)
            {
                return "Account not found";
            }
        if(acc._accountBalance < amount)
            {
                return "Not enough balance" + acc._accountBalance;
            }
        var T = new Transaction(tid, TransactionType.Withdraw, acc, acc, time, amount);
        acc._accountBalance -= amount;
        this._completedTransactionList.set(tid, T);
        acc._accountTransactions.set(tid, T);
        this._accountsList.set(accountId, acc);
        return "Withdraw done";
    }

    transfer(fromAccID : string, toAccID: string, amount : number, time : number) : string
    {
        var frAcc = this._accountsList.get(fromAccID);
        if(frAcc == null)
            {
                return "from account not found";
            }

        var toAcc = this._accountsList.get(toAccID);
        if(toAcc == null)
        {
            return "To account not found";
        }
        
        if(frAcc._accountBalance < amount)
            {
                return "Not enough balance" + frAcc._accountBalance;
            }
        
        var tid = this.generateTransactionID();
        var T = new Transaction(tid, TransactionType.Transfer, frAcc, toAcc, time, amount);
        this._pendingTransactionList.set(tid, T);
        var debited = this.debitAmount(tid, amount);
        if(debited)
            {
                var credit = this.creditAmount(tid, amount);
                if(debited && credit) 
                    {
                        this._pendingTransactionList.delete(tid);
                        this._completedTransactionList.set(tid, T);
                        return "Transfer successful";
                    }
                else 
                {
                    this.creditAmount(fromAccID, amount)
                    return "Transfer could not be done, error in credit";
                }
            }
        else {
            return "Transfer could not be done, error in debit";
        }
    }

    debitAmount(tid : string,  time : number)  : boolean
    {
        var pT = this._pendingTransactionList.get(tid);
        var frAcc = pT._fromAccount;
        if(frAcc == null)
            {
                return false;
            }

        
        if(frAcc._accountBalance < pT._amount)
            {
                return false;
            }

        var tid = this.generateTransactionID();
        var T = new Transaction(tid, TransactionType.Debit, pT._fromAccount, pT._toAccount, time, pT._amount); 
        frAcc._accountTransactions.set(tid, T);
        frAcc._accountBalance -= pT._amount;
        this._accountsList.set(pT._fromAccount._id, pT._fromAccount);
        return true;
    }

    creditAmount(tid : string, time : number)  : boolean
    {
        var pT = this._pendingTransactionList.get(tid);
        var toAcc = pT._toAccount;
        if(toAcc == null)
            {
                return false;
            }
             
        if(time >= pT._time + this._expiryTime) return false;

        var tid = this.generateTransactionID();
        var T = new Transaction(tid, TransactionType.Credit, pT._fromAccount, pT._toAccount, time, pT._amount); 
        toAcc._accountTransactions.set(tid, T);
        toAcc._accountBalance += pT._amount;
        this._accountsList.set(toAcc._id, toAcc);
        return true;
    }

    generateAccountID() : string
    {
        return (++this._totalAccount).toString();
    }

    generateTransactionID() : string
    {
        return (++this._totalTransactions).toString();
    }
}
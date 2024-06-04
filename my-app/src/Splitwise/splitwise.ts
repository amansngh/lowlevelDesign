/*
User <id, name, owesto, getsfrom, totalowe, total get>
*/


export default class Solution{
    run()
    {
        var queries = new Array<string>();
        queries.push("SHOW");
        queries.push("SHOW u1");
        queries.push("EXPENSE u1 1000 4 u1 u2 u3 u4 EQUAL");
        queries.push("SHOW u4");
        queries.push("SHOW u1");
        queries.push("EXPENSE u1 1250 2 u2 u3 EXACT 370 880");
        queries.push("EXPENSE u4 1200 4 u1 u2 u3 u4 PERCENT 40 20 20 20");
        queries.push("SHOW u1");
        queries.push("SHOW");

        var u1 = new SplitUser("u1", "User1");
        var u2 = new SplitUser("u2", "User2");
        var u3 = new SplitUser("u3", "User3");
        var u4 = new SplitUser("u4", "User4");
        
        var splitUsers = new Array<SplitUser>();
        splitUsers.push(u1);
        splitUsers.push(u2);
        splitUsers.push(u3);
        splitUsers.push(u4);

        var split = new Split(splitUsers);
        var ans = new Array<string>();

        for(var query of queries)
            {
                var output = split.processInput(query);
                if(output)
                    {
                        for(var o of output)
                            {
                                console.log(o);
                                ans.push(output);
                            }
                    }
            }
    }
}

class SplitUser { 
    static SEQ : number;
    id : string;
    name : string;
    owesTo : Map<string, number>;
    getsFrom : Map<string, number>;
    totalOwe : number;
    totalGet : number;

    constructor(id : string, name : string)
    {
        this.id = id;
        this.name = name;
        this.owesTo = new Map<string, number>();
        this.getsFrom = new Map<string, number>();
        this.totalGet = 0;
        this.totalOwe = 0;
    }
}

class Split
{
    _users : SplitUser[];

    constructor(users : SplitUser[])
    {
        this._users = users;
    }

    processInput(input : string) : any
    {
        var Iarray = input.split(' ');
        if(Iarray && Iarray.length > 0)
            {
                var showOrExpense = Iarray[0];
                switch(showOrExpense)
                {
                    case "SHOW":
                        if(Iarray.length > 1)
                            {
                                var forUser = Iarray[1];
                                return this.showForUser(forUser);
                            }
                        else return this.showForAll();
                    case "EXPENSE":
                        var payeeID = Iarray[1];
                        var paidAmount = Iarray[2];
                        var totalPeople = Iarray[3];
                        var involvedPeopleIds = new Array<string>();
                        var counter = 4;
                        for(let i = 4; i < Iarray.length; i++)
                            {
                                if(Iarray[i].includes("EQUAL") || Iarray[i].includes("EXACT") || Iarray[i].includes("PERCENT"))
                                    {
                                        break;
                                    }
                                else {involvedPeopleIds.push(Iarray[i]);counter++;};
                                
                            }
                        if(involvedPeopleIds && involvedPeopleIds.length > 0)
                        {
                            var operation = Iarray[counter];
                            switch(operation)
                            {
                                case "EQUAL" : 
                                    this.equal(payeeID, Number(paidAmount), Number(totalPeople), involvedPeopleIds); break;
                                case "EXACT" :
                                    var exactAmounts = new Array<string>();
                                    for(let i = counter+1; i < Iarray.length; i++)
                                        {
                                            exactAmounts.push(Iarray[i]);
                                            
                                        }
                                    
                                    this.exact(payeeID, Number(paidAmount), Number(totalPeople), involvedPeopleIds, exactAmounts); break;
                                case "PERCENT" :
                                    var percentAmounts = new Array<string>();
                                    for(let i = counter+1; i < Iarray.length; i++)
                                        {
                                            percentAmounts.push(Iarray[i]);
                                            
                                        }
                                    this.percent(payeeID, Number(paidAmount), Number(totalPeople), involvedPeopleIds, percentAmounts); break;
                            }
                        }
                        break;

                }
            }
    }

    equal(payeeID : string , paidAmount : number, totalPeople : number, involvedPeopleIds : string[])
    {
        var dividedAmount = paidAmount / totalPeople;
        var users = this.getUsersFromIDs(involvedPeopleIds);
        var payee = this.getUserFromID(payeeID);
        payee.totalGet += (dividedAmount * (totalPeople -1));
        if(users && users.length > 0)
            {
                for(var user of users)
                    {
                        if(user.id != payeeID)
                            {
                                user.totalOwe+=dividedAmount;
                            var prevAmount = user.owesTo.get(payeeID);
                            if(!prevAmount) prevAmount = 0;
                            user.owesTo.set(payeeID, prevAmount+dividedAmount)
                            var prevAmount2 = payee.getsFrom.get(user.id);
                            if(!prevAmount2) prevAmount2 = 0;
                            payee.getsFrom.set(user.id, prevAmount2+dividedAmount);
                            }
                    }
            }
    }

    exact(payeeID : string , paidAmount : number, totalPeople : number, involvedPeopleIds : string[], exactAmountString : string[])
    {
        var exactAmounts = Array<number>();
        var totalExactAmount = 0;
        for(var eAS of exactAmountString)
            {
                exactAmounts.push(Number(eAS));
                totalExactAmount += Number(eAS);
            }
        
        if(totalExactAmount != paidAmount)
            {
                console.log("Error"); return;
            }

        var users = this.getUsersFromIDs(involvedPeopleIds);
        var payee = this.getUserFromID(payeeID);
        if(payee && users && users.length > 0)
            {
                payee.totalGet+= paidAmount;
                for(let i = 0; i < users.length; i++)
                    {
                        users[i].totalOwe+=exactAmounts[i];
                        var prevAmount = users[i].owesTo.get(payeeID);
                        if(!prevAmount) prevAmount = 0;
                        users[i].owesTo.set(payee.id, prevAmount+exactAmounts[i]);
                        prevAmount = payee.getsFrom.get(users[i].id);
                        if(!prevAmount) prevAmount = 0;
                        payee.getsFrom.set(users[i].id, prevAmount+exactAmounts[i]);
                    }

            }
    }

    percent(payeeID : string , paidAmount : number, totalPeople : number, involvedPeopleIds : string[], percentAmountString : string[])
    {
        var percentAmounts = Array<number>();
        var totalPAS = 0;
        for(var pAS of percentAmountString)
            {
                totalPAS+=Number(pAS);
            }
        
        if(totalPAS != 100)
            {
                console.log("Not valid percent");
                return;
            }
        for(var pAS of percentAmountString)
            {
                var amount = (Number(pAS)/100)*paidAmount;
                percentAmounts.push(amount);
            }
        var users = this.getUsersFromIDs(involvedPeopleIds);
        var payee = this.getUserFromID(payeeID);

        if(payee && users && users.length > 0)
            {
                for(let i = 0; i < users.length; i++)
                    {
                        if(users[i].id == payeeID)
                            {
                                var selfOwe = percentAmounts[i];
                                payee.totalGet+= paidAmount - selfOwe;
                            }
                    }
                for(let i = 0; i < users.length; i++)
                    {
                        if(users[i].id == payeeID) continue;

                        users[i].totalOwe+=percentAmounts[i];
                        var prevAmount = users[i].owesTo.get(payeeID);
                        if(!prevAmount) prevAmount = 0;
                        users[i].owesTo.set(payee.id, prevAmount+percentAmounts[i]);
                        prevAmount = payee.getsFrom.get(users[i].id);
                        if(!prevAmount) prevAmount = 0;
                        payee.getsFrom.set(users[i].id, prevAmount+percentAmounts[i]);
                    }

            }
    }

    getUsersFromIDs(userIDs : string[]) : SplitUser[]
    {
        var ans = new Array<SplitUser>();
        if(userIDs == null || userIDs.length == 0) return null;
        else{
            for(var uID of userIDs)
                {
                    var user = this._users.filter(U => U.id == uID);
                    ans.push(user[0]);
                }
        }

        return ans;
    }

    getUserFromID(userID : string) : SplitUser
    {
        if(userID == null) return null;
        else{
            var user = this._users.filter(U => U.id == userID);
            return user[0];
        }
    }

    showForUser(userID : string) : string[]
    {
        var ans = new Array<string>();
        var user = this.getUserFromID(userID);
        if(user)
            {
                if(user.totalOwe == 0)
                    {
                        ans.push("No balances");
                    }
                    else 
                    {
                        user.owesTo.forEach((value, key) => {
                            ans.push(user.name + " owes " + this.getUserFromID(key).name + ":" + value.toFixed(2));
                        })
                    }
            }

        return ans;
    }

    showForAll(): string[]
    {
        var ans = new Array<string>();
        for(var user of this._users)
            {
                if(user.totalOwe > 0)
                    {
                        user.owesTo.forEach((value, key) => {
                            ans.push(user.name + " owes " + this.getUserFromID(key).name + ":" + value.toFixed(2));
                        })
                    }
            }
        if(ans.length == 0) ans.push("No balances");
        return ans;
    }
}
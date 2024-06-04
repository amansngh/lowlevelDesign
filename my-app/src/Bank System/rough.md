You have to create a banking system.
1. Can create account.
2. Delet account.
3. DepositMoney
4. WithdrawMoney.
5. TransferMoney
6. Top 10 transactions of your back.


Design
Account <id, name, balance>;
Transaction<id, type, fromAcc, toAcc, amount>;
Bank<list of accounts>;
PendingTransactionList.
TransactionType<Credit, Debit, Transfer>
//DepositType<Cash, AccountTransfer>
//WithdrawType<Cash, AccountTransfer>

Learnings:
1. to simplify design and spend on operations.
2. Transcation can be only C, D 
3. Transfer can be a new class.
4. PendingTransaction can have transfer.
5. accept transfer check for accounts same or not present on not amount or not.
set key : value every time
deduct amount, credit amount, delete from pending add to completed.
Transaction and account IDs can be managed inside the class also via static.

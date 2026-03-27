let accountBallance = 0
function bank_account(account_name, money, deposit, withdraw) {
    for(let i= 0; i < myBank_account.length; i++) {
        console.log("-------------- Account Details --------------")
        console.log("Account name : " + myBank_account[i].account_name + "\nbalance is   : $" + myBank_account[i].money)
        if(myBank_account[i].deposit) {
            console.log("---------- Deposit Details -----------")
            accountBallance = myBank_account[i].money + myBank_account[i].deposit
            console.log("deposit amount is $" + myBank_account[i].deposit + "\nbalance is   : $" + accountBallance + "\n")
        }else if(myBank_account[i].withdraw) {
            console.log("---------- Withdraw Details ----------")
            accountBallance = myBank_account[i].money - myBank_account[i].withdraw
            console.log("withdraw amount  : $" + myBank_account[i].withdraw + "\nCurrent balance  : $" + accountBallance  + "\n")
        }
    }
}
let myBank_account = [
    {account_name: "Sokkong", money: 10000, deposit: 2000},
    {account_name: "Somnang", money: 8000, withdraw: 50},
    {account_name: "Sim", money: 11000, withdraw: 2000},
    {account_name: "Rothana", money: 8000, deposit: 500}
]
bank_account(myBank_account)
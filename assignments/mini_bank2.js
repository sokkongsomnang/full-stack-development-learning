let accountBallance = 0
function deposit (amount) {
    accountBallance = accountBallance + amount
        if (amount < 0) {
        console.log("Unsuccessful deposit")
        accountBallance = accountBallance + (-amount)
    } else {
        console.log("deposit amount is $" + amount)
        console.log("current balance is $" + accountBallance)
    }
}
function withdraw (amount) {
    accountBallance = accountBallance - amount
    if (accountBallance < 0) {
        console.log("Unsuccessful withdrawal")
        accountBallance = accountBallance + amount
    } else {
        console.log("withdraw amount is $" + amount)
        console.log("current balance is $" + accountBallance)
    }
}
function processTransactions (transactions) {
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].type === "deposit") {
            deposit(transactions[i].amount)
        } else {
            withdraw(transactions[i].amount)
        }
    }
}
let inputTransactions = [
    {type: "deposit", amount: -50},
    {type: "withdrawal", amount: 60},
    {type: "withdrawal", amount: 15},
    {type: "deposit", amount: 53}
];
processTransactions(inputTransactions)

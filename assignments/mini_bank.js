function withdraw (account){
    let amount = 100
    account.money = account.money - amount
    console.log("withdraw amount is " + amount)
    console.log("balance is " + account.money)
}
function deposit (account){
    let deposit_amount = 1000
    account.money = account.money + deposit_amount
    console.log("deposit amount is " + deposit_amount)
    console.log("balance is " + account.money)
}
function main(){
    let account = {
        accountname: "Somnang",
        money: 10000
    }
    console.log(account.accountname)
    console.log("Original balance is " + account.money)
    console.log("After withdraw")     
    withdraw(account)
    console.log("After deposit")     
    deposit(account)
}
main()




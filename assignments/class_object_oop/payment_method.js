class Order{
    constructor(id, item = [], total = []) {
        this.id = id
        this.item = item
        this.total = total
    }
    addItem(item){
        this.item.push(item)
    }
    getTotal(){
        order1.total = 0
        for( let i = 0; i < order1.item.length; i++){
            order1.total = order1.total + order1.item[i].price
        }
        console.log("Sub Total : " + order1.total + "$")
        }
}
console.log("-------- Order 1 --------")
const order1 = new Order(1)
order1.addItem({id: 1, name: "Product A", price: 100})
order1.addItem({id: 2, name: "Product B", price: 150})
for( let i = 0; i < order1.item.length; i++){
    console.log("ID : " + order1.item[i].id, " Item : " + order1.item[i].name, " Price : " + order1.item[i].price)
}
order1.getTotal()
// console.log("ID : " + data1.item[0].id, " Item : " + data1.item[0].name, " Price : " + data1.item[0].price)

class Payment extends Order{
    constructor(orderId, amount, id, status, method){
        super(id)
        this.orderId = orderId
        this.amount = amount
        this.status = status
        this.method = method
    }
    getStatus(){
        this.status = "Pending"
        console.log("Status  : " + this.status)
    }
    getMethod(){
        this.method = "Cash"
        console.log("Method  : " + this.method)
    }
    remarkSuccess(){
        this.status = "Paid"
        console.log("Status  : " + this.status)
    }
    remarkFailed(){
        this.status = "Failed"
        console.log("Status  : " + this.status)
    }
    changeMethod(){
        if(this.method == "Card"){
            this.method = "Cash"
            console.log("Changed Method to : " + this.method)
        }else{
            this.method = "Card"
            console.log("Changed Method to : " + this.method)
        }
    }
}
console.log("-------- Payment 1 --------")
const payment1 = new Payment(10, 31)
console.log("ID \t: " + order1.id)
console.log("OrderID : " + payment1.orderId)
console.log("Amount \t: " + payment1.amount)
payment1.getStatus()
payment1.getMethod()
console.log("Total Amount : " + order1.total*payment1.amount + "$")
console.log("---------- Processing ------------")
if(payment1.method == "Card"){
    payment1.remarkSuccess()
    console.log("payments successfully!!!")
}else{
    payment1.remarkFailed()
    payment1.changeMethod()
    payment1.remarkSuccess()
    console.log("payments successfully!!!")
}
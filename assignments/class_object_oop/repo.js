//order Repo
class OrderRepo{
    constructor( id, db = []){
        this.db = db
        this.id = id
    }
    addOrder(order){
        this.db.push(order)
    }
    save(order){
        this.db.push(order)
    }
    findAll(){
        return this.db
    }
    findById(id){
        return this.db.find(order => order.id.toString() === id)
    }
}
console.log("________________ Order Repo _________________")
const orderRepo1 = new OrderRepo(1)
orderRepo1.addOrder({id: 1, orderId: 10, name: "Product A", price: 100})
orderRepo1.addOrder({id: 2, orderId: 20, name: "Product B", price: 110})
orderRepo1.addOrder({id: 3, orderId: 30, name: "Product C", price: 90})
for(let i = 0 ; i < orderRepo1.db.length; i++){
    console.log("ID : " + orderRepo1.db[i].id, " OrderID : " + orderRepo1.db[i].orderId," Item : " + orderRepo1.db[i].name, " Price : " + orderRepo1.db[i].price)
}
console.log("-------- Save --------")
orderRepo1.save({id: 4, orderId: 40, name: "Product D", price: 80})
orderRepo1.save({id: 5, orderId: 56, name: "Product E", price: 200})
orderRepo1.save({id: 6, orderId: 60, name: "Product F", price: 70})
console.log("Save : " + orderRepo1.db.length)
console.log("-------- Find All --------")
const allOrder = orderRepo1.findAll()
allOrder.forEach(order => 
    console.log("ID : " + order.id, 
        " OrderID : " + order.orderId,
        " Item : " + order.name, 
        " Price : " + order.price)
    )
console.log("-------- Find By Id --------")
const order = orderRepo1.findById("5")
orderRepo1.findById("5")
console.log("ID : " + order.id, " OrderID : " + order.orderId," Item : " + order.name, " Price : " + order.price + "\n")

//Payment Repo
class PaymentRepo{
    constructor( id, db = []){
        this.db = db
        this.id = id
    }
    addPayment(payment){
        this.db.push(payment)
    }
    save(payment){
        this.db.push(payment)
    }
    findAll(){
        return this.db
    }
    findById(id){
        return this.db.find(payment => payment.id.toString() === id)
    }
    findByOrderId(Orderid){
        return this.db.find(payment => payment.orderId.toString() === Orderid)
    }
}
console.log("________________ Payment Repo _________________")
const payment1 = new PaymentRepo(1)
payment1.addPayment({id: 1, orderId: 10, amount: 10, status: "Pending", method: "Cash"})
payment1.addPayment({id: 2, orderId: 20, amount: 20, status: "Paid", method: "Card"})
payment1.addPayment({id: 3, orderId: 30, amount: 30, status: "Processing", method: "KHQR"})
let subtotal = 0
let TotalAmount = 0
for(let i = 0 ; i < payment1.db.length; i++){
    console.log("ID : " + payment1.db[i].id, 
        "\nOrderID : " + payment1.db[i].orderId, 
        "\nPrice : " + orderRepo1.db[i].price,
        "\nAmount : " + payment1.db[i].amount, 
        "\nStatus : " + payment1.db[i].status, 
        "\nMethod : " + payment1.db[i].method)
        subtotal =  orderRepo1.db[i].price*payment1.db[i].amount
    console.log("Sub Total : " + subtotal + "$")
    TotalAmount = TotalAmount + subtotal
}
console.log("Total Amount : " + TotalAmount + "$")
console.log("-------- Save --------")
payment1.save({id: 2, orderId: 20, amount: 20, status: "Paid", method: "Card"})
payment1.save({id: 4, orderId: 40, amount: 40, status: "Paid", method: "KHQR"})
console.log("Save : " + payment1.db.length)
console.log("-------- Find All --------")
const allPayment = payment1.findAll()
allPayment.forEach(payment => 
    console.log("ID : " + payment.id, 
        " OrderID : " + payment.orderId,
        " amount : " + payment.amount, 
        " Price : " + payment.status,
        "\t Method : " + payment.method)
    )
console.log("-------- Find By Id --------")
const payment = payment1.findById("4")
payment1.findById("4")
console.log("ID : " + payment.id, " OrderID : " + payment.orderId," Amount : " + payment.amount, " Status : " + payment.status, " \tMethod : " + payment.method)
console.log("-------- Find By OrderId --------")
const paymentId = payment1.findByOrderId("20")
payment1.findByOrderId("20")
console.log("ID : " + paymentId.id, " OrderID : " + paymentId.orderId," Amount : " + paymentId.amount, " Status : " + paymentId.status, " \tMethod : " + paymentId.method + "\n")


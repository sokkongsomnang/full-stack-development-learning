function products(productName, price, quantity, discount){
    for(let i = 0; i < inputProduct.length; i++) {
        console.log("\n------ E-commerce Processing Checkout ---------");
        console.log("Product\t : " + inputProduct[i].productName, "\nprice\t : $" + inputProduct[i].price, "\nQTY\t : " +inputProduct[i].quantity);
        console.log("--------Purchase Details----------")
        let promotion = 0
        let subtotal = inputProduct[i].price * inputProduct[i].quantity
        let tax = subtotal * 0.08
        let total = 0
        if(inputProduct[i].discount == "SAVE20") {
            promotion = inputProduct[i].price * 0.2
            console.log("Discount is applied : save $" + promotion);
            total = (subtotal- promotion) + tax
        }else{
            console.log("Discount is not applied!!!");
            total = subtotal + tax
        }
        console.log("Subtotal : $" + subtotal, "\nTax(8%)\t : $" + tax);
        console.log("-----------------------------------------------")
        console.log("Total\t : $" + total + "\n");
    }
}   
let inputProduct = [
    {productName: "Camera", price: 50, quantity: 12, discount: "SAVE20"},
    {productName: "Laptop", price: 150, quantity: 5, discount: "SAVE21"},
    {productName: "Mobile", price: 100, quantity: 10, discount: "SAVE20"},
]
products(inputProduct)
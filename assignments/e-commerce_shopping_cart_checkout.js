function e_commerce (){
    let product = "Laptop"
    let price = 150
    let quantity = 5
    let subtotal = price * quantity
    let discount = "SAVE20"
    let tax = subtotal * 0.08
    let total = 0
    console.log("------ E-commerce Processing Checkout ---------");
    if(discount == "SAVE20") {
        let promote = subtotal * 0.2
        console.log("Discount is applied : save $" + promote);
        total = (subtotal - promote) + tax
    }else{
        console.log("Discount is not applied!!!");
        total = subtotal + tax
    }
    console.log("------------ Product Details ------------",
        "\nProduct\t : " + product, "\nprice\t : $" + price, "\nQTY\t : " +quantity,
        "\n------------ Purchase Details ------------", 
         "\nSubtotal : $" + subtotal, "\nTax(8%)\t : $" + tax);
    console.log("-----------------------------------------------")
    console.log("Total\t : $" + total + "\n");
}
function e_commerce1 (){
    let product = "Camera"
    let price = 50
    let quantity = 12
    let subtotal = price * quantity
    let discount = "SAVE21"
    let tax = subtotal * 0.08
    let total = 0
    console.log("\n------ E-commerce Processing Checkout ---------\n");
    if(discount == "SAVE20") {
        console.log("Discount is applied : $" + subtotal * 0.2);
        total = (subtotal - (subtotal*0.2)) + tax
    }else{
        console.log("Discount is not applied!!!");
        total = subtotal + tax
    }
    console.log("------------ Product Details ------------",
        "\nProduct\t : " + product, "\nprice\t : $" + price, "\nQTY\t : " +quantity,
        "\n------------ Purchase Details ------------",
        "\nSubtotal : $" + subtotal, "\nTax(8%)\t : $" + tax);
    console.log("-----------------------------------------------")
    console.log("Total\t : $" + total + "\n\n");
}
e_commerce()
e_commerce1()
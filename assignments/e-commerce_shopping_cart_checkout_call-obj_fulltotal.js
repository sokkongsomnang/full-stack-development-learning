const TAX_RARE = 0.08
const PROMOTE_CODE = "SAVE0"
const DISCOUNT_PERCENTAGE = 0.2
const cartItem = [
    {name: "Laptop", price: 150, quantity: 5, discount: PROMOTE_CODE},
    {name: "Mobile", price: 100, quantity: 10, discount: PROMOTE_CODE},
    {name: "Camera", price: 50, quantity: 12, discount: PROMOTE_CODE}
]
function calculateSubTotal(cartItem){
    let subtotal = 0
    for(let i = 0; i < cartItem.length; i++) {
        subtotal += cartItem[i].price * cartItem[i].quantity
    }
    return subtotal
}
function applyDiscount(currentTotal, codeProvide){
    if(!codeProvide){
         return currentTotal
    }
    if(codeProvide !== PROMOTE_CODE){
        console.log("Code is not valid!!!");
        return currentTotal
    }
    return currentTotal - (currentTotal * DISCOUNT_PERCENTAGE)
}
function calculateTax(amount){
    return amount * TAX_RARE
}
function processCheckout(cart, promoteCode){
    const subtotal = calculateSubTotal(cartItem)
    const discount = applyDiscount(subtotal, cartItem.discount)
    const tax_amount = calculateTax(discount)    
    const discounted = discount - (discount * DISCOUNT_PERCENTAGE)
    const total = discount + tax_amount - (discount * DISCOUNT_PERCENTAGE)
    console.log("------ E-commerce Processing Checkout ---------")
    console.log("Discount applied saved : $ " + discount * DISCOUNT_PERCENTAGE)
    console.log("\n--------- Purchase Details ----------")
    console.log("Subtotal   : $ " + subtotal)
    console.log("Discounted : $ " + discounted)
    console.log("Tax(8%)\t   : $ " + tax_amount)
    console.log("-----------------------------------")
    console.log("Total duel : $ " + total + "\n" )
}
processCheckout(cartItem, "SAVE20")

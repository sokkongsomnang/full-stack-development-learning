console.log("________________________ Variable and Datatype ________________________");
console.log("***************** String Type *****************");
let product1 = "Pen";
let product2 = "Pencil";
let product3 = "Notebook";
let product4 = "Eraser";
let product5 = "Ruler";
console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);
console.log(product5);
console.log("***************** Number Type *****************") ;
let price1 = 10;
let price2 = 23;
let price3 = 33;
let price4 = 49;
let price5 = 5;
console.log(product1 + " is " +price1 + " $");
console.log(product2 + " is " +price2 + " $");
console.log(product2 + " is " +price3 + " $");
console.log(product2 + " is " +price4 + " $");
console.log(product2 + " is " +price5 + " $");
console.log("***************** Boolean Type *****************");
let instock1 = true;
let instock2 = false;
let instock3 = true;
let instock4 = false;
let instock5 = true;
console.log(product1 + " instock " +instock1);
console.log(product2 + " instock " +instock2);
console.log(product3 + " instock " +instock3);
console.log(product4 + " instock " +instock4);
console.log(product5 + " instock " +instock5);
console.log("***************** Object Type *****************");
let purchase1 = {
    product: product1,
    price: price1,
    amount: 3,
}
let total1 = purchase1.price * purchase1.amount;
let purchase2 = {
    product: product2,
    price: price2,
    amount: 22,
}
let total2 = purchase2.price * purchase2.amount;
let purchase3 = {
    product: product3,
    price: price3,
    amount: 5,
}
let total3 = purchase3.price * purchase3.amount;
let purchase4 = {
    product: product4,
    price: price4,
    amount: 7,
}
let total4 = purchase4.price * purchase4.amount;
let purchase5 = {
    product: product5,
    price: price5,
    amount: 1,
}
let total5 = purchase5.price * purchase5.amount;
console.log("Purchase1 : " + purchase1.product, " price is " + purchase1.price, "QTY" +purchase1.amount, "Total is " + total1);
console.log("Purchase2 : " + purchase2.product, " price is " + purchase2.price, "QTY" +purchase2.amount, "Total is " + total2);
console.log("Purchase3 : " + purchase3.product, " price is " + purchase3.price, "QTY" +purchase3.amount, "Total is " + total3);
console.log("Purchase4 : " + purchase4.product, " price is " + purchase4.price, "QTY" +purchase4.amount, "Total is " + total4);
console.log("Purchase5 : " + purchase5.product, " price is " + purchase5.price, "QTY" +purchase5.amount, "Total is " + total5);
console.log("___________________________________ Assignment End ___________________________________");
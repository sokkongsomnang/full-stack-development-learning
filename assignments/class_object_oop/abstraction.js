class Payment {
    // abstract method
    process() {
        throw new Error("Method 'process()' must be implemented");
    }
    // simple method
    checkCode(code){
        console.log("Code: " + code);
    }
}

class CreditCardPayment extends Payment {
    process() {
        console.log("Processing Credit Card payment");
    }
}

class PayPalPayment extends Payment {
    process() {
        console.log("Processing PayPal payment");
    }
}

// Direct call
console.log("-------- Direct call --------")
const payment1 = new CreditCardPayment();
payment1.checkCode("123123")
payment1.process();
//Direct call
const payment2 = new PayPalPayment();
payment2.checkCode("789987")
payment2.process();

// call as array
console.log("\n-------- call as array --------")
const payments = [
    new CreditCardPayment(),
    new PayPalPayment()
];
payments.forEach(p => p.process());

// call as function
console.log("\n-------- call as function --------")
function getPaymentByCode(code) {
    if (code == 123123) {
        console.log("Code: " + code + " is valid");
        return payment1.process();
    } 
    if (code == 7000) {
        console.log("Code: " + code + " is valid");
        return payment2.process();
    }
    console.log("Invalid payment code : " + code + " is not in the system!!! \nPlease try again...");
}
getPaymentByCode(123123);
getPaymentByCode(7000);
getPaymentByCode(192920);
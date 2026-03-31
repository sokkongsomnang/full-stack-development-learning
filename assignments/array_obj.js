console.log("__________ Object ___________")
const test = {
    stuName: "Sokkong",
    stuAge: 15,
    stuGender: "male",
    run: function() {
        console.log(`Run Test ${this.stuName}`)
        console.log(`Run Test ${this.stuAge}`)
        console.log(`Run Test ${this.stuGender}`)
    }
}
console.log("-------- Access by dot--------")
console.log(test.stuName)
console.log(test.stuAge)
console.log(test.stuGender)
console.log(`Run on the "Testing run function`)
test.run()

// console.log("-------- Access by key --------")
// console.log(test["stuName"])
// console.log(test["stuAge"])
// console.log(test["stuGender"])
// console.log("-------- Modify --------")
// test.stuName = "Somnang"
// test.stuAge = 16
// test.stuGender = "female"
// console.log(test["stuName"])
// console.log(test["stuAge"])
// console.log(test["stuGender"])
// for (let key in test){
//     console.log(test[key])
// }

// console.log("-------- Delete --------")
// delete test.stuName
// // delete test.stuAge    
// delete test.stuGender
// console.log(test["stuName"])
// console.log(test["stuAge"])
// console.log(test["stuGender"])
// for (let key in test){
//     console.log(test[key])
// }
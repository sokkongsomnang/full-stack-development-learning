const test = {
    person: "William",
    job: "Teacher",
    get getPerson(){
        if(this.person === "William"){
            console.log("Person is error ")
            return null
        }
        return this.person
    },
    set setPerson(person){
        if(person === "Sokkong"){
            console.log("Can not input " + person)
            return
        }
        this.person = person
    }
}
console.log("-------- Set & Get --------")
console.log("My name is " + test.person)
// console.log(test.job)
console.log("Get -> " + test.getPerson)
test.setPerson = "Sokkong"
console.log("Afer set")
console.log("Get -> " + test.getPerson)
console.log("My name is " + test.person)
test.setPerson = "Somnang"
console.log("Afer set")
console.log("Get -> " + test.getPerson)
console.log("My name is " + test.person)
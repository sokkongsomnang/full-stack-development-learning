function Test(person,job = "Student"){
    this.person = person
    this.job = job
    this.run = function(){
        this.walk()
        console.log(`Name is ${this.person}`)
        console.log(`Job is ${this.job}`)
    }
    this.walk = function(){
        console.log( this.person + " Walk to school")
    }
} 
const test = new Test("Somnang")
const test2 = new Test("Sokkong","Teacher")
console.log("-------- Console log --------")
console.log("-------- Test 1 --------")
console.log("Name is " + test.person)
console.log("Job is " + test.job)
console.log("-------- Test 2 --------")
console.log("Name : " +test2.person)
console.log("Job : " + test2.job)
console.log("-------- Run function --------")
test.run(test.person,test.job)
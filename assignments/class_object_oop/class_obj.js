//Class
class Student1{
    constructor(){
        this.name = "Somnang";
        this.age = 21
    }
}
//Class parameter
class Student2{
    constructor(name,age){
        this.name = name;
        this.age = age
    }
}
//class set,get
class Student3{
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    get getName(){
        return this.name
    }
    set SetName(name){
        this.name = name
    }
}
//Object
const s1 = new Student1()
console.log(s1)
const s2 = new Student2("Sokkong",43)
console.log(s2)
const s3 = new Student3("Rathana",23)
console.log(s3.getName, s3.age)
s3.SetName = "Somnang"
console.log(s3.getName, s3.age)
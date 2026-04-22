class Person {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log(`I'm ${this.name}`)
    }
}
class Student extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    study(){
        console.log(`${this.name} study, I'm ${this.age} years old`);
    }
}
const p1 = new Person('John');
p1.introduce()

const s1 = new Student("Mr. A", 20);
s1.introduce()
s1.study()

const p2 = new Person('Jack');
p2.introduce()
const s2 = new Student("Mr. B", 25);
s2.introduce()
s2.study()

class Student{
    #name = '' // private

    constructor(){
        this.age = 5; // public
    }

    getName(){
        // name is empty
        if(this.#name === ''){
            return "Nothing"
        }
        return "This Data From Class Student " + this.#name
    }
    setName(name){
        // name < 3
        if(name.length < 3){
            console.log("Invalid")
            return;
        }
        // set #name = name (name is valid)
        this.#name = name;
    }
}
const s1 = new Student();

// name = empty
s1.setName('');
console.log(s1.getName());
console.log(s1.age);

// name < 3
s1.setName('Jo');
console.log(s1.getName());
console.log(s1.age);

// name is valid
s1.setName('John');
console.log(s1.getName());
console.log(s1.age);
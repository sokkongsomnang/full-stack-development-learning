console.log("________________________ Logical Operators Practice + Function ________________________");
function gpa1(){
    let subject1 = 90
    let subject2 = 60
    let subject3 = 70
    console.log("Subject 1 : " + subject1)
    console.log("Subject 2 : " + subject2)
    console.log("Subject 3 : " + subject3)
    let total1 = subject1 + subject2 + subject3
    let avg1 = total1 / 3
    console.log("Total is " + total1)
    console.log("Average is " + avg1)
    if(avg1 > 101){
        console.log("Your score must not grater than 100")
    }else if(avg1 >= 80 && avg1 <= 100){
        console.log("GPA A")
    }else if(avg1 >= 60){
        console.log("GPA B")
    } else if(avg1 >= 50){
        console.log("GPA C")
    }else{
        console.log("GPA F")
    }
}
function gpa2(){
    let subject1 = 50
    let subject2 = 60
    let subject3 = 55
    console.log("Subject 1 : " + subject1)
    console.log("Subject 2 : " + subject2)
    console.log("Subject 3 : " + subject3)
    let total2 = subject1 + subject2 + subject3
    let avg2 = total2 / 3
    console.log("Total is " + total2)
    console.log("Average is " + avg2)
    if(avg2 > 101){
        console.log("Your score must not grater than 100")
    }else if(avg2 >= 80 && avg2 <= 100){
        console.log("GPA A")
    }else if(avg2 >= 60){
        console.log("GPA B")
    } else if(avg2 >= 50){
        console.log("GPA C")
    }else{
        console.log("GPA F")
    }
}
function gpa3(){
    let subject1 = 101
    let subject2 = 100
    let subject3 = 110
    console.log("Subject 1 : " + subject1)
    console.log("Subject 2 : " + subject2)
    console.log("Subject 3 : " + subject3)
    let total3 = subject1 + subject2 + subject3
    let avg3 = total3 / 3
    console.log("Total is " + total3)
    console.log("Average is " + avg3)
    if(avg3 > 101){
        console.log("Your score must not grater than 100")
    }else if(avg3>= 80 && avg3 <= 100){
        console.log("GPA A")
    }else if(avg3 >= 60){
        console.log("GPA B")
    } else if(avg3 >= 50){
        console.log("GPA C")
    }else{
        console.log("GPA F")
    }
}
function main(){
console.log("_______________ GPA for first Student _______________")
gpa1()
console.log("_______________ GPA for second Student _______________")
gpa2()
console.log("_______________ GPA for third Student _______________")
gpa3()
}

main()
const myMath = {
    PI : 3.14,
    sum : function(a,b){
        return a+b
    },
    minus : function(a,b){
        return a-b
    },
    multiply : (a,b) => a*b
}
console.log("-------- Object Practice with math --------")
console.log("PI\t\t : " + myMath.PI)
console.log("Sum(a,b)\t : " + myMath.sum(1,2))
console.log("Minus(a,b)\t : " + myMath.minus(3,2))
console.log("Multiply(a,b)\t : " + myMath.multiply(2,2))
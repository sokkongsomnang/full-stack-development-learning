console.log("________________________ Keywords ________________________")
console.log("-------- Continue --------")
for(let i = 0; i <= 10; i++){
    if(i%2){
        continue
    }
    console.log(i);
}
console.log("-------- Break --------")
for(let i = 0; i <= 10; i++){
    if(i ==3){
        break
    }
    console.log(i);
}
console.log("-------- Switch --------")
switch(34){
    case 1 : console.log("Case 1"); break;
    case 2 : console.log("Case 2"); break;
    case 3 : console.log("Case 3"); break;
    case 4 : console.log("Case 4"); break;
    default : console.log("Default");
}
console.log("-------- Return ------------")
function product(a,b){
    return a*b
}
console.log(product(2,3));
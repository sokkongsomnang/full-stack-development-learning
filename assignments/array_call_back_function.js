console.log("__________ Array ___________")  
console.log("-------- call back function --------")
const test = [1,2,3,4,5,6]
for(let i = 0; i < test.length; i++){
    console.log(test[i])
}
function callBackFn(value, index){
    console.log(value, index)
}
test.forEach(callBackFn)
const test2 = ["Sokkong","Somnang","Sim","Rothana"]
for (let i = 0; i < test2.length; i++){
    console.log(test2[i])
}
test2.forEach(callBackFn)

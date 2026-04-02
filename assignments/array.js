console.log("\n ---------- Concat() ----------");
let my_arr1 = ["Davit", "Nita", "Roth"]
let my_arr2 = [22, 44, 55, 55]
let result_concat = my_arr1.concat(my_arr2)
console.log(result_concat)

console.log("\n ---------- ToString() ----------")
let my_arr3 = ["Davit", "Nita", "Roth"]
let result_toString = my_arr3.toString()
console.log(result_toString)

console.log("\n ---------- IndexOf() ----------")
let index_of = [10, 20, 30, 40]
console.log("if find index successfully")
let result_indexOf = index_of.indexOf(30)
console.log(result_indexOf)
console.log("Not found index")
let notfound = index_of.indexOf(50)
console.log(notfound)

console.log("\n ---------- Find() ----------")
let find = [5, 30, 10, 20, 35]
let result_find = find.find(function (num) {
    return num > 20
});
console.log(result_find)

console.log("\n ---------- FindIndex() ----------")
let findIndex_arr = [5, 10, 15, 20]
let result_findIndex = findIndex_arr.findIndex((x) => x > 15)
console.log(result_findIndex)

console.log("\n ---------- forEach() ----------")
let forEach_arr = ["a", "b", "c"]
forEach_arr.forEach((item, index) => {
  console.log(index, item)
})

console.log("\n ---------- Includes() ----------")
let includes_arr = [10, 20, 30]
console.log(includes_arr.includes(15) + "\ttrue")
console.log(includes_arr.includes(10) + "\tfalse")

console.log("\n ---------- sort() ----------")
console.log("sort string")
let sortString_arr = ["banana", "apple", "orange"]
sortString_arr.sort()
console.log(sortString_arr)
console.log("\nsort number")
let sortNum_arr = [40, 10, 100, 5]
sortNum_arr.sort((a, b) => b - a)
console.log(sortNum_arr)

console.log("\n---------- Slice() ----------");
let slice_arr = [10, 20, 30, 40, 50];
let slice_result = slice_arr.slice(1, 3);
console.log(slice_result);

console.log(" \n ---------- Splice() ----------");
console.log("splice for delete");
let delete_arr = [10, 20, 30, 40];
delete_arr.splice(0, 1);
console.log(delete_arr);
console.log("\nsplice_add_item");
let add_arr = [10, 20, 30];
add_arr.splice(1, 0, 15, 16, 25);
console.log(add_arr);

console.log("\n ---------- End Array ----------")
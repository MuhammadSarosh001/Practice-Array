// find duplicate value in an array

var arr2 = [2,3,4,5,6,7,2,4]

const duplicateVal = arr2.filter((item, index) => arr2.indexOf(item) < index);

console.log(duplicateVal);
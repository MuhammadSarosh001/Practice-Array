// There are two arrays with individual values, write a program to compute the sum
// of each individual index value from the given arrays.Go to the editor sample
// array: array1 = [1,0,2,3,4]; array2 = [3,5,6,7,8,13]; Excepted Output : [4,5,8,10,12,13]

var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];
let array3 = [];

let maxLength;
if (array1.length > array2.length) {
    maxLength = array1.length;
} else {
    maxLength = array2.length;
}

for(let i = 0 ; i < maxLength ; i++){
    if(array1[i] === undefined ){
        array1[i] = 0;
    }
    else if(array2[i] === undefined){
        array2[i] = 0;
    }
let sum = array1[i] + array2[i];
array3.push(sum);
}
console.log(array3);
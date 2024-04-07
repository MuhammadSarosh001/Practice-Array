// Write a program to find the most frequent item of an Array.
// Sample Array : var arr1 = [3,'a','a','a',2,3,'a',3,'a',2,4,9];
// Sample Output : a(5 times) 

function FindMFItem(arr1) {
    var MFItem = 1;
    var count = 0;
    var item;
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i; j < arr1.length; j++) {
            if (arr1[i] == arr1[j]){
                count++;
            }
            if (MFItem < count) {
                MFItem = count;
                item = arr1[i];
            }
        }
        count = 0;
    }
    console.log(item + " ( " + MFItem + " times ) ");   
}

var arr1 = [3,'a','a','a',2,3,'a',3,'a',2,4,9];
FindMFItem(arr1)
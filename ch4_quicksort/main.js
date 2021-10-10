/* Exerciss*/
//1- Write out the code for the earlier sum function 
function sum(arr) {
    if(arr.length ==0) return 0;
    else return arr[0] + sum(arr.slice(1));
}

arr = [1, 5, 10, 25, 16, 1];
console.log("Sum of items =",sum(arr));
//2-Write a recursive function to count the number of items in a list.
function count(arr) {
    if(arr.length == 0) return 0
    else return 1 + count(arr.slice(1));
}
console.log("Number of items =" , count(arr));
// 3- Find the maximum number in a list.
function max(arr) {
    if(arr.length == 2) return arr[0] > arr[1]? arr[0] : arr[1];
    let sub_max = max(arr.slice(1));
    return arr[0] > sub_max ? arr[0] : sub_max;
}
console.log("Maximum item =" , max(arr));

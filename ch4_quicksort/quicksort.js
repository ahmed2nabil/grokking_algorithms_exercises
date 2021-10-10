function qsort(arr) {
    if(arr.length == 0) return arr;
    else {
        var pivot = arr[0];
        var less = arr.slice(1).filter((element) => {
            return element <= pivot ;
        });
        var greater = arr.slice(1).filter((element) => {
            return element > pivot ;
        });
        return qsort(less).concat([pivot],qsort(greater))
    }
}

console.log(qsort([10,5,2,3]))
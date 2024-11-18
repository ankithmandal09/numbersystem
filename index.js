function evenAndOddNumbers(arr){
    let number = [];

    for(i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0 || arr[i] % 2 !== 0){
            console.log(arr[i]);
        }
    }
    return number;
}



let numbers = [3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,];
let evenAndOddNumbers(numbers);
console.log(numbers);
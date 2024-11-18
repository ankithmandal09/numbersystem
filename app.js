function findPrimeNumber(){
    if (num <= 1) return false;
    for(i=0; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;

    }
    return false;
}

    function findPrime(arr){
        return arr.filter(findPrimeNumber);
    }
    let Array = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,];
    let primes = findPrime(Array);
    console.log(primes);

    










    const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,];
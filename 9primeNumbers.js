/* Write a function that takes a maximum bound and returns all primes up to and including the maximum bound. */
function findPrime(num){
    const arr = [];
    for(let i = 2; i <= num; i++){
        let isPrime = true;
        for(let j = 2; j <= Math.floor(i / 2); j++) if(i % j === 0) isPrime = false;
        if(isPrime) arr.push(i);
    }
    return arr;
}
// test cases
console.log(findPrime(11));
// random tests
console.log(findPrime(9));
console.log(findPrime(13));
console.log(findPrime(18));
console.log(findPrime(4));
console.log(findPrime(1));
console.log(findPrime(0));
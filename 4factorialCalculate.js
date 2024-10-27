/* Create a program that receives a non-negative integer and returns its factorial. The factorial of a number n is the product of all positive integers from 1 to n. By definition, the factorial of 0 is 1. */
function factorialCalculator(num){
    let x = 1;
    for(let i = 2; i <= num; i++) x *= i;
    return x;
}
// test cases
console.log(factorialCalculator(5));
console.log(factorialCalculator(0));
// random tests
console.log(factorialCalculator(12));
console.log(factorialCalculator(7));
console.log(factorialCalculator(3));
console.log(factorialCalculator(23));
console.log(factorialCalculator(1));
console.log(factorialCalculator(0));
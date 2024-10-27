/* 
The Eureka numbers are numbers like this: 135 = 1 * 1 + 3 * 2 + 5 ** 3. Which means that we have to take a number and sum its digits raised to the consecutive powers.
First digit to power 1, second to power 2 and so on... If the result of that sum is the same as the number itself that means that number is Eureka.

Create a function which receives a range like (a, b) and outputs every Eureka number in it.

NOTE: Every number which have one digit is Eureka, because for example 5 = 5 ** 1...
*/
function eurekaNumbers(n, m){
    const arr = [];
    for(let i = n; i <= m; i++){
        let num = 0;
        String(i).split('').forEach((val, index) => num += val ** (index + 1));
        if(num == i) arr.push(i);
    }
    return arr;
}
// test cases
console.log(eurekaNumbers(1, 10));
console.log(eurekaNumbers(1, 100));
// random tests
console.log(eurekaNumbers(4, 17));
console.log(eurekaNumbers(3, 10000));
console.log(eurekaNumbers(2, 7));
console.log(eurekaNumbers(90, 1099));
console.log(eurekaNumbers(0, 1));
console.log(eurekaNumbers(0, 0));
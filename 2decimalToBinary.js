/* Create a program which receives a decimal number and converts it to binary. */
function decimalToBinary(num){
    const arr = [];
    while(num / 2 > 0){
        arr.push(num % 2);
        num = Math.floor(num / 2);
    }
    return Number(arr.reverse().join(''));
};
// test cases
console.log(decimalToBinary(17));
console.log(decimalToBinary(15));
// random tests
console.log(decimalToBinary(14));
console.log(decimalToBinary(32));
console.log(decimalToBinary(102));
console.log(decimalToBinary(13));
console.log(decimalToBinary(1));
console.log(decimalToBinary(0));
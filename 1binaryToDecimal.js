/* Create a program which receives a binary number and converts it to decimal. */
function binaryToDecimal(num){
    const arr = [];
    String(num).split('').forEach((val, index) => arr.push(2 ** index * val));
    return arr.reduce((prev, cur) => prev + cur, 0);
};
// test cases
console.log(binaryToDecimal(10001));
console.log(binaryToDecimal(1111));
// random tests
console.log(binaryToDecimal(111));
console.log(binaryToDecimal(1101));
console.log(binaryToDecimal(110001));
console.log(binaryToDecimal(1101010001010));
console.log(binaryToDecimal(1));
console.log(binaryToDecimal(0));
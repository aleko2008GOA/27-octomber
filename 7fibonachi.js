/* Create a program that receives an integer n and returns the first n numbers in the Fibonacci sequence. The sequence starts with 0 and 1, and each subsequent number is the sum of the previous two. */
function fibonachiArr(num){
    const arr = [];
    for(let i = 0; i < num; i++){
        if(arr.length === 0) arr.push(0);
        else if(arr.length === 1) arr.push(1);
        else arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
}
// test cases
console.log(fibonachiArr(5));
console.log(fibonachiArr(7));
// random tests
console.log(fibonachiArr(13));
console.log(fibonachiArr(21));
console.log(fibonachiArr(5));
console.log(fibonachiArr(3));
console.log(fibonachiArr(1));
console.log(fibonachiArr(0));
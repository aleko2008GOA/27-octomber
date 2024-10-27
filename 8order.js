/* 
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

NOTE: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/
function sortString(str){
    const arr = [];
    for(let i = 1; i <= str.split(' ').length; i++) arr.push(str.split(' ').find(val => val.includes(i)));
    return arr.join(' ');
}
// test cases
console.log(sortString("is2 Thi1s T4est 3a"));
console.log(sortString("4of Fo1r peop6le g3ood th5e the2"));
console.log(sortString(""));
// random tests
console.log(sortString("2 3 4 1"));
console.log(sortString("1 2 3 4"));
console.log(sortString("laaaa1"));
console.log(sortString("1The be2st"));
console.log(sortString("1"));
console.log(sortString(""));
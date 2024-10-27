/* Create a program that checks if a given string is a palindrome (reads the same forward and backward). The function should ignore spaces, punctuation, and capitalization. */
function palendromCheck(str){
    return str.toLowerCase().split(' ').join('').split('').reverse().join('') === str.toLowerCase().split(' ').join('');
};
// test cases
console.log(palendromCheck("A man a plan a canal Panama"));
console.log(palendromCheck("Hello"));
// random tests
console.log(palendromCheck("Welcome home!"));
console.log(palendromCheck("My name is Alex"));
console.log(palendromCheck("AAAAbbaaaa"));
console.log(palendromCheck("What is Sit Ahw"));
console.log(palendromCheck("a"));
console.log(palendromCheck(""));
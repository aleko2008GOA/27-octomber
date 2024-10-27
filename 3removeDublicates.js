/* Create a program that receives a list and removes duplicate elements while maintaining the original order. */
function removeDublicates(arr){
    const newArr = [];
    const set = new Set(arr);
    set.forEach(val => newArr.push(val))
    return newArr;
}
// test cases
console.log(removeDublicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDublicates(['a', 'b', 'a', 'c']));
// random tests
console.log(removeDublicates([12, 45, 45, 9, 12]));
console.log(removeDublicates(['Alex', 'Nika', 'Data']));
console.log(removeDublicates([false, true, true]));
console.log(removeDublicates(['GOA', 'GOA', 'GOA']));
console.log(removeDublicates([true, 1]));
console.log(removeDublicates([false, 0]));
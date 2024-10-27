/* You will receive a string which will contain words in PascalCase, your job is to convert them into snake_case. */
function pascalCaseToSnake(str){
    const arr = [];
    String(str).split('').forEach((val, index) => {
        if((val.toLowerCase() !== val || val === '') && index !== 0) arr.push('_');
        arr.push(val.toLowerCase());
    });
    return arr.join('').split(' ').join('');
}
// test cases
console.log(pascalCaseToSnake("TestController"));
console.log(pascalCaseToSnake("MoviesAndBooks"));
console.log(pascalCaseToSnake("App7 Test"));
console.log(pascalCaseToSnake(1));
// random tests
console.log(pascalCaseToSnake("GOA the Best"));
console.log(pascalCaseToSnake("Ah"));
console.log(pascalCaseToSnake("WelcomeHome"));
console.log(pascalCaseToSnake(1));
console.log(pascalCaseToSnake("HelloWorld!"));
console.log(pascalCaseToSnake(""));
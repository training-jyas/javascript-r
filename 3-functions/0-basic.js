// what is a function ?
// how to define it
// how to execute it
// how to call in diff ways
// arguments in function and how are they diff from JAVA
// scope in function - this is important
// hoisting in functions - this is important
// self invoking functions -- which i also call as IIFE(Immediate invoking function expression)
// closures in function
// recursive mechanism
// this keyword
// to use call(), apply() and bind()


// function keyword
// function name
// executor arguments
// function body
// function return
function test(a, b) {
    console.log('function executed...');
    return 123;
}

var result = test();
console.log(result);

console.log("#######################################");
// Now lets see how we can use the arguments and the return type
function test2(a, b) {
    console.log(a, b);
    return 234;
}
console.log(test2()); // we get undefined, undefined
console.log(test2(10, 20)); // we get 10, 20 printed

function test3(a, b) {}
console.log(test3()); // we get undefined

console.log("#####################################");

var func;
if (typeof func === 'function') {
    func();
}

func = function () {
    console.log('now i am a function');
};
func();

// call it in diff ways
function fn() {
    console.log('function as a function name');
}
var fn1 = function () {
    console.log('function as function variable name');
}
fn();
console.log(typeof fn);

console.log("#######################") 
console.log("Anonymous functions")
console.log("#######################")


// question round
// 1.
function fn() {
    return 1;
}
function fn() {
    return 2;
}
var result = fn();
console.log(result);

// 2.
var fn = function() {
    return 3;
}
var result = fn();
console.log(result);

// 3. 
var func = function() {
    return 4;
}
var result = fn();
console.log(result); //3

// 4.
function func2 (a, b) {
    var a = 'rudra';
    var b, c, d, e;
    console.log(a);
    document.write(a);
    return undefined;
}
func2(10);
var result = func2(20);
console.log(result);


// example 1
function sumOf2Numbers (a, b) {
    var result = a + b;
    return result;
}
var a = 10;
var b = 20;
var resultOfSum = sumOf2Numbers(a, b);
console.log(resultOfSum);

// example 2
function sumOf10And20 () {
    return 10 + 20;
}
console.log(sumOf10And20());
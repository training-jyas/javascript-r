// what is closure ?
// Closure gives you a way to access a scope although you are out of the scope execution cycle

var closureFunc = function (num) {
    var innerFunc = function() {
        console.log(num);
    };
    innerFunc();
    return innerFunc;
};

var innerFunc = closureFunc(30);
console.log('inner func : ', innerFunc);
console.log('inner func called : ', innerFunc());

// example
// sum method using closures
function sum(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
        }
    }
}
console.log(sum(10)(20)(30));

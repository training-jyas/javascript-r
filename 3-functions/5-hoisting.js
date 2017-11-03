function run() {
    console.log('--------run----------');

    console.log(test); // undefined
    var test = 'hello';
    console.log(test); // hello

    // how does it print here when we havent create the method printHello yet ?
    printHello('world');

    function printHello(value) {
        console.log(value); // world
    }

    printString('abc');
    var printString = function (value) {
        console.log(value); // may be error
    }

    return 'ok';
}
// run();

// Two take aways from this :-
// 1. All the function definition is hoisted to the top of the scope
// 2. All the declarations is hoisted to the top of the scope


// the above method will be converted to this.
function run2() {
    var test;

    function printHello(value) {
        console.log(value);
    }
    var printString;
    console.log('--------run----------');
    console.log(test);
    test = 'hello';
    console.log(test);
    printHello('world');
    printString('abc');
    printString = function (value) {
        console.log(value);
    }

    return 'ok';
}

function run3() {
    console.log('-----------run3-----------');
    var fn = function () {
        console.log('func 1');
    }
    fn();
    fn2();
    console.log(abc);
    var abc = 50;
    var fn = function () {
        console.log('func 2');
    }
    function fn2() {
        console.log('func 3');
    }
}
run3();

// above function run3 will be converted to this functon run4
function run4() {
    var fn;
    var abc;
    var fn;
    function fn2() {
        console.log('func 3');
    }
    console.log('-----------run3-----------');
    fn = function () {
        console.log('func 1');
    }
    fn();
    fn2();
    console.log(abc);
    abc = 50;
    fn = function () {
        console.log('func 2');
    }
    fn();
}

run4();

var fn = function() {
    console.log('abc');
}
fn();
var fn = function() {
    console.log('cde');
}
fn();
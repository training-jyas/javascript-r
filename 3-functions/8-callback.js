// example to show if the parameter is a function and how to check

// callbacks
var succesCallback = function (num) {
    console.log('i am the SUCCESS callback. and the num is :', num);
};

var failureCallback = function (num) {
    console.log('i am the FAILURE callback. and the num is :', num);
};

var checkIf20 = function (num, success, failure) {
    if (num === 20) {
        if (typeof success === 'function') {
            success(num);
        } else {
            console.log("num is :", num);
        }
    } else {
        if (typeof failure === 'function') {
            failure(num);
        } else {
            console.log("num is not 20 but :", num);
        }
    }
}

console.log("######################");
console.log('if the num is 20', checkIf20(20));
console.log("######################");
console.log('if the num is 20', checkIf20(30));
console.log("######################");
console.log('if the number is 20 and callback executed -', checkIf20(20, succesCallback, failureCallback));
console.log("######################");
console.log('if the number is 20 and callback executed -', checkIf20(30, succesCallback, failureCallback));


// for example let us try to understand the each method in jquery
var each = function(array, callback) {
    if (array && typeof array === 'object' && array.length) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            if (typeof callback === 'function') {
                callback(i, array[i]);
            }
        }
    }
};
var jquery = {
    each: each
};

var array = [1, 2, 3];
jquery.each(array, function(index, item) {
    console.log(index, ' = ', item);
});
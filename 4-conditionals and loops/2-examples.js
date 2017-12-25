(function () {
    'use strict';

    // if else
    var temp = 29;
    var temp2 = '233';
    if (temp === temp2) {
        console.log('its true by ===');
    } else if (temp == temp2) {
        console.log('its true by ==');
    } else {
        console.log('its false');
    }

    if(null){
        console.log('null is true');
    }
    if(undefined){
        console.log('undefined is true');
    }
    if(NaN){
        console.log('NaN is true');
    }
    if(0){
        console.log('0 is true');
    }
    if(1){
        console.log('1 is true');
    }

    if([1] == [1]) {
        console.log('[1] == [1]');
    }
    // switch case
    // comparison is loose comparison here
    console.log('-------switch case - 1---------');
    var temp2 = 25;
    switch (temp2) {
        case 23:
            console.log('value is 23');
            break;
        case 20:
            console.log('value is 20');
            break;
        case 25:
            console.log('value is 25');
            break;
        case 25:
            console.log('value is 25');
            break;
        default:
            console.log('control is in default');
    }

    console.log('-------switch case - 2 with strings---------');
    // switch also works with strings
    var temStr = '123';
    switch (temStr) {
        case '123':
            console.log('value is "123"');
            break;
        case 123:
            console.log('value is 123');
            break;
        case 'hello':
            console.log('value is hello');
            break;
        default:
            console.log('control is in default');
    }

    // var arr = [1];
    // switch (arr) {
    //     case [1]:
    //         console.log("[1]");
    //     default:
    //         console.log('default');
    // }

    // suppose i run the above switch case with a number 123
    var tempStr = '123';
    switch (tempStr) {
        case '123':
            console.log('value is "123"', tempStr);
            break;
        case 'hello':
            console.log('value is hello');
            break;
        default:
            console.log('control is in default');
    }
})();

// for loop
function print() {
    for (var i = 0; i < 10; i = i + 2) {
        console.log(i); // 0, 2, 4, 6, 8
    }
    console.log('i =', i); // 0
}

function print2() {
    var i = 0;
    for (;i < 10;) {
        console.log(i);
        i = i + 2;
    }
    console.log('i =', i);
}

print();
console.log('value of i = ', i);

// while
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// do while
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10)
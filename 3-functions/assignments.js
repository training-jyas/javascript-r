// lets develop a e-cart module
// create a pricing module
// this will accept a item object and it will give you the price for it in rupees or dollars depending on the parameter
// price object should have mrp price, discounted price, and discount percentage

// create a availability module
// pass the item object, it should give me the availablity in boolean.

// create a canDeliver module
// given the item is available if it can be delivered to a specific pin code

// You have to use all the concepts form iife, closures, modules, callback, typeof

// Data models
var price = {
    "mrp": '',
    "disPrice": '',
    "disc": ''
};

var item = {
    "name": '',
    "color": '',
    "type": '',
    "price": price
};


var pincodes = ['', '', '', ''];
var itemsInStock = [{}, {}, {}, {}];

// 1. searchAItem()
// 2. addItem()
// 3. getPriceOfaItem()
// 4. isItemInStock()
// 5. canDeliver()
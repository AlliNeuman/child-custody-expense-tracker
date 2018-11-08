to use date picker need:
documentation:
https://www.npmjs.com/package/react-datepicker

do that directly in that view
--basically take the array of each item that has been marked paid
--calculate each paid item and add the paid amounts
--make sure to use the correct float

For math stuff ... Use:
https://www.w3schools.com/jsref/jsref_tofixed.asp
do something like: toFixed 2
so it rounds to the nearest 100th.

example code for math:
class Item {
  constructor(name, price, paid) {
    this.name = name;
    this.price = price;
    this.paid = paid;
  }

  payBill(){
    this.paid = !this.paid;
  }
}

var array_of_stuffs = []

array_of_stuffs.push(new Item("Bill1", 2.99, true));
array_of_stuffs.push(new Item("Bill2", 5.99, true));
array_of_stuffs.push(new Item("Bill3", 12.25, true));
array_of_stuffs.push(new Item("Bill4", 32.49, false));

var total = 0.0;

array_of_stuffs[0].payBill();

array_of_stuffs.forEach(item => {
  if(item.paid) {
    total += item.price;
  }
})


console.log('total before toFixed()', total);
console.log('total after toFixed()', total.toFixed(2));

USE LODASH FOR EASY FILTERING:
_.filter(expense: {'paid': false});

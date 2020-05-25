
var fruit = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var arr = fruit.split("/");
document.write(arr[4] + "<br>");

var str = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var res = str.split("/");
document.write(res[4]);

var cars = "Audi, Fiat, Renault, Maybach, Mercedes";
var newCar = cars.split(",");
document.write(newCar[4]);
//////////////////////////////////////////////
var a = 7;

var b = 14;

var c = "21";

var d = '36';

var e = 42;

var sum = a + b + Number(c) + Number(d) + e;
console.log(sum);
/////////////////////////////////////////////////
var f = '1';

var g = 15;

var h = 8;

var i = "1";

var sum2 = Number(f) * 15 * 8 * Number(1);
console.log(sum2);
/////////////////////////////////////////////////
var finalSum = sum / sum2;
console.log(finalSum);

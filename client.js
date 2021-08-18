"use strict";
exports.__esModule = true;
var server_1 = require("./server");
// function Addition(no1 :number, no2: number) :number
// {
//     var ans : number =  0;
//     ans = no1 + no2;
//     return ans;
// }
// function main()
// {
var x = 11;
var y = 20;
var ret = 0;
ret = server_1.Addition(x, y);
console.log("Addition is", ret);
//}
ret = server_1.substraction(x, y);
console.log("substraction is", ret);

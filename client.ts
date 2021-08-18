import {Addition, substraction ,fun} from "./server";
 

// function Addition(no1 :number, no2: number) :number
// {
//     var ans : number =  0;
//     ans = no1 + no2;
//     return ans;
// }

// function main()
// {
 var x:number = 11;
 var y:number = 20;
 var ret :number = 0;
 ret =Addition(x,y);
 console.log("Addition is",ret);
//}

ret =substraction(x,y);
console.log("substraction is",ret);
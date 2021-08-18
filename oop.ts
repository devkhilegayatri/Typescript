//class declaration
class Arithmatics{
    //characteristics
    no1 :number;
    no2 :number;
    ans :number;
    //Behaviour
    constructor(x:number,y:number){
         this.no1 = x;
         this.no2 = y;
         this.ans = 0;
    }
    Addition():number
    {
         this.ans = this.no1 + this.no2;
         return this.ans;
    }
    substraction():number
    {
         this.ans = this.no1 - this.no2;
         return this.ans;
    }
}

var ret :number = 0;
var obj1 =new Arithmatics(10,12);
var obj2 =new Arithmatics(10.11);
ret =obj1.Addition();

console.log("Addition of boj1 is ",ret)
// Class Declaration
var Arithematic = /** @class */ (function () {
    // Behaviour
    function Arithematic(x, y) {
        this.No1 = x;
        this.No2 = y;
        this.ans = 0;
    }
    Arithematic.prototype.Addition = function () {
        this.ans = this.No1 + this.No2;
        return this.ans;
    };
    Arithematic.prototype.Substraction = function () {
        this.ans = this.No1 - this.No2;
        return this.ans;
    };
    return Arithematic;
}());
var ret = 0;
var obj1 = new Arithematic(10, 11);
var obj2 = new Arithematic(20, 11);
ret = obj1.Addition();
console.log("Addition of obj1 is : ", ret);
ret = obj2.Addition();
console.log("Addition of obj2 is : ", ret);

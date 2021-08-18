var Base = /** @class */ (function () {
    function Base(x, y) {
        console.log("base class constructor");
        //    this.no1 = 10;
        //    this.no2 = 20;
        this.no1 = x;
        this.no2 = y;
    }
    Base.prototype.fun = function () {
        console.log("inside fun of base");
        console.log(this.no1);
        console.log(this.no2);
    };
    return Base;
}());
var bobj = new Base(40, 50);
// console.log(bobj.no1);
// console.log(bobj.no2);
var bobj2 = new Base(10, 50);
// console.log(bobj2.no1);
// console.log(bobj2.no2);
bobj.fun();
bobj2.fun();

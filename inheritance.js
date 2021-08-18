var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super); //child class
    function Derived(a, b, c) {
        var _this = this;
        console.log("Dervived class constructor");
        _this = _super.call(this, a, b) || this;
        _this.value = c;
        return _this;
    }
    Derived.prototype.gun = function () {
        console.log("Derived gun");
        console.log(this.value);
    };
    return Derived;
}(Base //child class
));
var dobj = new Derived(11, 22, 33);
dobj.fun();
dobj.gun();

//  function fun(no1:number ,no2 ?:number)
//  {
//      console.log(no1);
//      console.log(no2);
//  }
//  fun(10,11);
function fun(name, passport, national) {
    if (national === void 0) { national = "Indian"; }
    console.log(name);
    if (passport == undefined) {
        console.log("sorry no passport");
    }
    else {
        console.log("passport no", passport);
    }
    console.log("nationality", national);
}
fun("Gauri", 1444444, "bangaladesh");
// new code
function fun2() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log(data.length);
}
fun2();

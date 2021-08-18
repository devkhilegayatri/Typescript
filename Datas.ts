class Base{
    no1:number;
    no2:number;
    constructor(x:number,y:number){   //parameterize constuctor
        console.log("base class constructor");
    //    this.no1 = 10;
    //    this.no2 = 20;
       this.no1 = x;
       this.no2 = y;
    }
    fun()
        {
     console.log("inside fun of base");
      console.log(this.no1);
      console.log(this.no2);
    }   
}
var bobj:Base =new Base(40,50);
// console.log(bobj.no1);
// console.log(bobj.no2);
var bobj2:Base = new Base(10,50);
// console.log(bobj2.no1);
// console.log(bobj2.no2);

bobj.fun();
bobj2.fun();
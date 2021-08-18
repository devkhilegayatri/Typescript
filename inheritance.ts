class Base{  //parents class
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
class Derived extends Base   //child class
{
    value:number;
    constructor(a:number,b:number,c:number){
      console.log("Dervived class constructor")
        super(a,b)
        this.value = c;
    }
    gun()
    {
        console.log("Derived gun"); 
        console.log(this.value)
    }
}
var dobj:Derived =new Derived(11,22,33);
 dobj.fun();
 dobj.gun();
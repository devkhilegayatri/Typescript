
//  function fun(no1:number ,no2 ?:number)
//  {
//      console.log(no1);
//      console.log(no2);
//  }

//  fun(10,11);

function fun(name : string ,passport ?, national= "Indian")
{
    console.log(name);
    if(passport == undefined)
    {
        console.log("sorry no passport");

    }
    else 
    {
        console.log("passport no",passport);
    }

    console.log("nationality",national);
}

fun("Gauri",1444444,"bangaladesh");

// new code
function fun2(...data:number[])
{
    console.log(data.length);
}
fun2();
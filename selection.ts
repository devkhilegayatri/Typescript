function sequence()
{
  console.log("Demonstration of sequence");
  var arr: number[]= [10,20,30,40,50];
  console.log(arr[0]);
  console.log(arr[1]);
  console.log(arr[2]);
  console.log(arr[3]);
}

//sequence();

function iteration1() : number
{
    console.log("Demonstration of iteration");
    var arr: number[]= [10,20,30,40];
    var icnt : number =0;
    var isum : number =0;
    isum = isum+ arr[0];
    isum = isum + arr[1];
    isum = isum + arr[2];
    isum = isum + arr[3];
    return isum;


}

function iteration2() : number
{
    console.log("Demonstration of iteration loop");
    var arr: number[]= [10,20,30,40,50,60];
    var icnt : number =0;
    var isum : number =0;
     for(icnt=0;icnt<arr.length;icnt++)
     {
          isum=isum + arr[icnt];    
     }
    return isum;
 
}
//iteration 3

function iteration3() : number
{
    console.log("Demonstration of iteration loop");
    var arr: number[]= [10,20,30,40,50,60];
    var ivalue : number =0;
    var isum : number =0;
    for(ivalue of arr)
    {
        isum = isum + ivalue;
    }  

    return isum;
 
}
//iteration 4 for index loop

function iteration4() : number
{
    console.log("Demonstration of iteration index loop");
    var arr: number[]= [10,20,30,40,50,60];
    //var iIndex : number =0;
    var isum : number  = 0;
    for(var iIndex in arr)
    {
         isum = isum + arr[iIndex];

    }  

    return isum;
 
}
// var iRet:number =0;
// iRet = iteration4()
// console.log("Addition is:-",iRet);

//while loop
function iteration5() : number
{
    console.log("Demonstration of iteration while loop");
    var arr: number[]= [10,20,30,40];
    var icnt : number =0;
    var isum : number =0;
    /* for(icnt=0;icnt<arr.length;icnt++)
     {
          isum=isum + arr[icnt];    
     }*/
     while(icnt < arr.length){
         isum = isum + arr[icnt];
         icnt++;
     }
    return isum;
 
}

// var iRet:number =0;
// iRet = iteration5()
// console.log("Addition is:-",iRet);

function iteration6() : number
{
    console.log("Demonstration of iteration while loop");
    var arr: number[]= [10,20,30,40];
    var icnt : number =0;
    var isum : number =0;
    /*  
     while(icnt < arr.length){
         isum = isum + arr[icnt];
         icnt++;
     }*/
    do {
        isum = isum + arr[icnt];
         icnt++;  
     }
     while(icnt < arr.length)
    return isum;
 
}

var iRet:number =0;
iRet = iteration6()
console.log("Addition is:-",iRet);

 
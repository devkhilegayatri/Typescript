var value : number[] = [10,20,30,40]
 var max =value[0];
 
 for(var i;i<value.length;i++){
           if(value[i] >= max){
              max=value[i];
           console.log("Max value:",max)

           }
 }
 console.log(max);
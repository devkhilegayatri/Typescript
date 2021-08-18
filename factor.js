function factor(num) {
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            console.log(i);
        }
    }
}
//var n:number=60;
factor(20);

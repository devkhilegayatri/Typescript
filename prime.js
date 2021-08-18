function chkprime(num) {
    if (num < 2)
        return false;
    for (var i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
chkprime(10);

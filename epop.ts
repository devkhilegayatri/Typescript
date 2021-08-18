// Class Declaration
class Arithematic
{
    // Characteristics
    No1 : number;
    No2 : number;
    ans : number;
    // Behaviour
    constructor(x : number, y : number)
    {
        this.No1 = x;
        this.No2 = y;
        this.ans = 0;
    }
    Addition(): number 
    {
        this.ans = this.No1 + this.No2;
        return this.ans;
    }
    Substraction(): number 
    {
        this.ans = this.No1 - this.No2;
        return this.ans;
    }
}
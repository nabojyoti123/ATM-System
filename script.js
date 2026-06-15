// console.log("ATM Started");
let balance = 5000; //variable represent the decalre a variable total bakance in the atm , store the memory 5000 is total amount
function deposit(amount) {
    balance = balance + amount;

}
deposit(1000); //call deposit function with argumnts 1000 //print 
console.log(balance);// balance is 6000
//function created for withdraw for withdraw the amount from balance
function withdraw(amount) {
    //condition checking
    if (amount <= balance && amount > 0) {
        balance = balance - amount; //inside function execute the function;
    } else {
        console.log("Insufficient Balance");
    }
}
function checkBalance() {
    return balance;
}
deposit(1000);
deposit(0);
withdraw(3000);
console.log(checkBalance());



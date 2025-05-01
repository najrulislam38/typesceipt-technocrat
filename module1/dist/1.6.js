"use strict";
// learning function using typescript
function add(num1, num2 = 0) {
    return num1 + num2;
}
// add(5, "5") // error: Argument of type 'string' is not assignable to parameter of type 'number'.
add(5, 5); // 10   
add(5); // 5
add(5, undefined); // 5 
const addArrow = (a = 0, b) => (a + b);
addArrow(5, 5); // 10
// addArrow(5); // 5
//  Object --> function --> method
const poorUser = {
    name: "Najrul",
    balance: 0,
    addBalance(balance) {
        return `Total Balance is ${this.balance += balance}`;
    }
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr.map((element) => element * element);

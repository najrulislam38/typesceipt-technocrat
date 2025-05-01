// learning function using typescript

function add(num1 : number, num2 : number = 0) : number {
    return num1 + num2;
}

// add(5, "5") // error: Argument of type 'string' is not assignable to parameter of type 'number'.

add(5, 5); // 10   
add(5); // 5
add(5, undefined); // 5 

const addArrow = (a : number = 0, b : number) : number => (a + b ) ;

addArrow(5, 5); // 10
// addArrow(5); // 5

//  Object --> function --> method

const poorUser = {
    name: "Najrul",
    balance: 0,
    addBalance(balance : number) : string{
        return `Total Balance is ${this.balance += balance}`;
    }
}

const arr : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr : number[] = arr.map((element : number) => element * element)


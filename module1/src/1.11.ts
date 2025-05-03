{

// Ternary operator | Optional chaining | Nullish coalescing

const age : number = 18;

// if( age >= 18 ) {
//     console.log("You are eligible to vote.");
// } else{
//     console.log("You are not eligible to vote.");
// }



const isAdult = age >= 18 ? "adult" : "Not adult";

console.log(isAdult); // adult


// Optional chaining

//  Nullish coalescing
// Null or undefined ==> Nullish coalescing operator works
//  Nullish coalescing operator (??) is used to provide a default value when the left-hand side is null or undefined.

type User = {
    name: string,
    age: number,
    email?: string,
    address?: {
        city: string,
        presentAddress: string,
        permanentAddress?: string,
    },
}


const user: User = {
    name: "Najrul",
    age: 25,
    address: { 
        city: "Joypurhat",
        presentAddress: "Kalai"
}
}

// optional chaining

const userPermanentAddress = user?.address?.permanentAddress ?? "No permanent address found"; // if user?.address?.permanentAddress is null or undefined, it will return "No permanent address found"


const isAuthenticated = null; // null or undefined

const result1 = isAuthenticated ?? "user is not authenticated nullish coalescing"; // if isAuthenticated is null or undefined, it will return "user is not authenticated nullish coalescing"
const result2 = isAuthenticated || "user is not authenticated "; // if isAuthenticated is falsy, it will return "user is not authenticated"
console.log(result1); 
console.log(result2); // user is not authenticated









}
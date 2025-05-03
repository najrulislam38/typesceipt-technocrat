{
    // 
//  Type Alias


type Student = {
    name: string,
    age: number,
    isActive: boolean,
    roll: number,
    contact?: string, // optional property
    address: {
        city: string,
        country: string,
    },
}
// const student1 : Student = {


const student1 : Student = {
    name: "John",
    age: 20,
    isActive: true,
    roll: 123,
    address: {
        city: "Dhaka",
        country: "Bangladesh",
    },


}

const student2 : Student = {
    name: "Mizan",
    age: 23,
    isActive: false,
    roll: 456,
    contact: "01712345678",
    address: {
        city: "Dhaka",
        country: "Bangladesh",
    },
}

type UserName = string; // type alias for string
const userName: UserName = "Mizan"; // userName is of type string

type IsMarried = boolean; // type alias for boolean
const isMarried: IsMarried = false; // isMarried is of type boolean



type Add = (a: number, b: number) => number; // type alias for function
const add : Add  = (a, b) => a + b;











    // 

}
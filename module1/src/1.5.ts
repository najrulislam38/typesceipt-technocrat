// Reference type --> Object

const user : {
    // companyName: "Tech Company",
   readonly companyName: string, // type --> literal type
    firstName: string,
    middleName?: string, // optional property
    lastName: string,
    isMarried: boolean,
    age: number,
} = {
    companyName: "Tech Company",
    firstName: "Najrul",
    lastName: "Islam",
    isMarried: false,
    age: 25,
}

// user.companyName = "Techix Company"; // error: Cannot assign to 'companyName' because it is a read-only property.
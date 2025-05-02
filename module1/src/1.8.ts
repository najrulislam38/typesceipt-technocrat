{
    
    // destructuring

// object destructuring

const user = {
    id: 3423,
    name: "Mizan",
    age: 23,
    address: {
        city: "Dhaka",
        country: "Bangladesh",
    },
    hobbies: ["cricket", "football", "basketball"],
    isMarried: false,
}

const {name, address:{city}, hobbies:[,,hobby]} = user; // object destructuring

console.log(name, city, hobby); // Mizan Dhaka basketball


// array destructuring

const players = ["Shakib", "Tamim", "Ronaldo", "Messi", "Jordan", "Kobe", "Federer", "Nadal"];

const [captain, viceCaptain, ...restPlayers] = players; // array destructuring


console.log(captain, viceCaptain, restPlayers); // Shakib Tamim [ 'Ronaldo', 'Messi', 'Jordan', 'Kobe', 'Federer', 'Nadal' ]










}
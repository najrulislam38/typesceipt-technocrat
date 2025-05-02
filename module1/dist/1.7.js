"use strict";
{
    // spread operator
    // rest operator
    // learn spread operator
    const player1 = ["Ronaldo", "Messi", "Neymar"];
    const player2 = ["Kaka", "Rivaldo", "Ronaldinho"];
    // player1.push(player2) // error: Argument of type 'string[]' is not assignable to parameter of type 'string'.
    player1.push(...player2); // spread operator
    const allPlayers = [player1, player2]; // nested array
    const nationalPlayer1 = {
        cricketer: "Shakib",
        footballer: "Messi",
        basketballer: "Jordan",
        tennisPlayer: "Federer",
    };
    const nationalPlayer2 = {
        cricketer2: "Tamim",
        footballer2: "Ronaldo",
        basketballer2: "Kobe",
        tennisPlayer2: "Nadal",
    };
    // const nationalPlayerList = [nationalPlayer1, nationalPlayer2]; // nested object
    const nationalPlayerList = Object.assign(Object.assign({}, nationalPlayer1), nationalPlayer2); // spread operator
    // console.log(nationalPlayerList);
    // const goodFriends = (friend1 : string, friend2: string, friend3: string, ) => {
    //     console.log(`My best friends are ${friend1}, ${friend2}, and ${friend3}`);
    // }
    // learning rest operator
    const goodFriends = (...friends) => {
        // console.log(`My best friends are ${friends}`);
        friends.forEach((friend) => {
            console.log(`My best friend is ${friend}`);
        });
    };
    goodFriends("Najrul", "Shakib", "Tamim", "Ronaldo", "Messi", "Jordan", "Kobe", "Federer", "Nadal"); // rest operator
    console.log(nationalPlayerList);
}

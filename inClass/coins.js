let cents = 99;

let quarters = (Math.trunc(cents/25)); 
cents = (cents % 25);


let dimes = (Math.trunc(cents/10)); 
cents = (cents % 10);

let nickles = (Math.trunc(cents / 5));
cents = cents % 5;

console.log("Quarters: " + quarters);
console.log("Dimes: " + dimes);
console.log("Nickels: " + nickles);
console.log("Pennies: " + cents );








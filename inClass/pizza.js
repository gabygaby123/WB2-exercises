let students = 25;
let pizzas = 4;
let slicesPerPizza = 8;

console.log("Every student gets " + Math.trunc((slicesPerPizza * pizzas) /students) + " slices.");
console.log("There are " + ((slicesPerPizza * pizzas) % students) + " slices left");
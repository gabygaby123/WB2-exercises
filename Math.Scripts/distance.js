let x1 = 4;
let x2 = 3;
let y1 = 6;
let y2 = 2;

let  xValues = x2 - x1;
let yValues = y2 - y1;

let xValuesSquared = Math.pow(xValues, 2);
let yValuesSquared = Math.pow(yValues, 2);

let distance = Math.sqrt(xValuesSquared + yValuesSquared);

console.log(distance.toFixed(2));


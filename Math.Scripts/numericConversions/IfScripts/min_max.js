let a = 1;
let b = 2;
let c = 3;

if (a>b && a>c) {
    console.log("The largest value of " + a + " " + b + " " + c +" is " + a)
} else if ( b>c && b>a){
    console.log("The largest value of " + a + " " + b + " " + c +" is " + b)
}
else{
    console.log("The largest value of " + a + " " + b + " " + c +" is " + c)
}

if (a<b && a<c) {
    console.log("The smallest value of " + a + " " + b + " " + c +" is " + a)
} else if ( b<c && b<a){
    console.log("The smallest value of " + a + " " + b + " " + c +" is " + b)
}
else{
    console.log("The smallest value of " + a + " " + b + " " + c +" is " + c)
}

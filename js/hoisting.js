
f();

console.log(a);

// This function is hoisted to top 
function f() {
    console.log("In function f()")
}

var a = 10;   // This is hoisted to top 

console.log(a);
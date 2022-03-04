function iseven(n) {
    return  n % 2 == 0 
}

var nums = [10, 20, 11, 34, 55, 77]

//var selectedNums = nums.filter(iseven)

// Anonymous Function 
var selectedNums = nums.filter(
     function (v) {
         return v % 2 == 0
     }
)

// Arrow function

selectedNums = nums.filter(v => v % 2 != 0)
for (let n of selectedNums) 
    console.log(n)

nextEvens = nums.map(v => v % 2 == 0 ? v + 2: v + 1)
for (let n of nextEvens)
    console.log(n)


// Arrow function with a block

nextOdds = nums.map(v => {
    if (v % 2 === 1)
        return v + 2;
    else
        return v + 1;
  }
);


for (let n of nextOdds)
    console.log(n)
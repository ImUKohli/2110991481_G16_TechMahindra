// function two(){
//   return 2;
// }

// function four(){
//   return 4;
// }

// console.log(1);
// console.log(2);

// setInterval(()=>{
//   console.log(3)
// },3000)

// console.log(four());
// setInterval(()=>{
//   console.log(3)
// },5000)

// console.log(6);



//Example 2:

// for(let i=1;i<=6;i++){
//   setTimeout(()=>{
//     console.log(i);
//   })
// }


//Solution:

// for (var i = 1; i <= 6; i++) {
//   (function(i) {
//     setTimeout(() => {
//       console.log(i);
//     });
//   })(i);
// }


// function x(){
//   var a=7;
//   function y(){
//     console.log(a);
//   }
//   return y;
// }

// var z = x();
// console.log(z);

// z();


// function z(){
//   var b = 900;
//   function x(){
//     var a = 7;
//     function y(){
//       console.log(a,b);

//     }
//   }
// }


// var count = 0;

// function increment(){
//   count++;
// }

// increment();
// increment();
// increment();
// increment();
// increment();

// console.log(count);


// {
//   var count = 0;
//   {
//     function increment(){
//       count++;
//     }

//       {
//         increment();
//         increment();
//         increment();
//         increment();
//         increment();
//         console.log(count);
//       }
//   }
// }



var count = 0;

function increment(){
  function z(){
    count++;
  }
  z();
}

increment();
increment();
increment();
increment();
increment();

console.log(count);
//output is 5 


//HOF Higher order function can be used as they can take Fucntion as Arguments 

//Example of Higher Order Function 
function operate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(operate(5, 3, add));       //Output is 8
console.log(operate(5, 3, multiply));  // Output is 15

// console.log(1);
// console.log(sumOfTwo(10,5));
// function sumOfTwo(a,b){
//   return a+b;
// }

// setTimeout(console.log(4),2000);

// var start = 1;

// var end = 1000000;

// while(start<end){
//   start++;
// }

// console.log("End");

// setInterval(()=>{
//   console.log(9,4000)
// });

// console.log(1);
// console.log(SumOfTwo(10, 5));

// function SumOfTwo(a, b) {
//     return a + b;
// }

// setTimeout(() => {
//     console.log(4);
// }, 0);
// var start = 1;
// var end = 10000000000;
// while (start < end) {
//     start++;
// }
// console.log("end");
// setInterval(() => {
//     console.log(9);
// }, 4000);
// console.log(2);



//Disadvantages of Closures:
//1) Memory Free Nahi hoti  -> Overconsumption of Memory
//2) Repeat -> Closures are as it is not garbage collected 
//3) COmplexity


//Function statement
function abc(){
  console.log('abc');
}

abc(); //FUcntion Calling

var a = function(){
  console.log("Annonymus Function")
}

a();
function sum(a,b){
  return a+b
}

var total = sum(10,5);
console.log(total);



//Arrow Function
const add = (a, b) => a + b;
console.log(add(5, 3)); 


function xyz(){
  console.log(1);
}

var abc = function cdf(){
  console.log(2);
}

xyz();
cdf(); //Uncaught ReferenceError: cdf is not defined
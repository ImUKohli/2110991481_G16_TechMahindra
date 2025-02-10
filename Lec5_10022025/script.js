//Example 1:

// console.log("Hello");

// var a = 10;

// function squareOfNumber(x){
//   var ans = x * x;
//   return ans;
// }

// console.log(squareOfNumber(a));

//Example 2:
// console.log(abc);  //Answer is Undefined

// var ans= sumofTwoNumbers(10,5); //Answer is 15
// console.log(ans);
// var abc = 29;

// function sumofTwoNumbers(a,b){
//   var ans = a+b;
//   return ans;
// }

// var majorAns = sumofTwoNumbers(6,8); //Answer is 14
// console.log(majorAns);

//Example 4:
// console.log(xyz);
// console.log(sumOfTwoNumbers(10,16));
// let xyz = 12;

// function sumOfTwo(a,b){
//   let ans = a+b;
//   return ans;
// }

// console.log(sumOfTwo(19,27));

//Example 5: Lexical  Scope 
{
  var a = 24;
  var b = 33;
  var c = 45;
  console.log(a);
  console.log(b);
  console.log(c);
  {
    var a = 12;
    var b = 93;
    var c = 10;
    console.log(a);
    console.log(b);
    console.log(c);
    {
      var a = 5;
      var b = 9;
      var c = 36;
      console.log(a);
      console.log(b);
      console.log(c);
    }
  }
}


//Example 7:
var x;
var x=20;
console.log(x);
  

// let a; 
// let a=20;
// console.log(a); 
// SyntaxError



//Note: 
//TDZ: Temporal Dead Zone :- Intialization to exection ke beech ka time Period.
// Time Period Between Phase 1(Intialization) and Phase 2 (Execution) is called as Temporal Dead Zone.
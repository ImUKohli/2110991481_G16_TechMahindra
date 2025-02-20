//Question 1:- 
function createCounter(initialValue = 0) {
  let count = initialValue; 

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
    getCount: function () {
      return count;
    },
  };
}


const counter = createCounter(5);

counter.increment(); 
counter.increment(); 
counter.decrement(); 
console.log(counter.getCount()); 




//Question 2:- 
function memoizedFibonacci() {
  const cache = {}; 

  function fibonacci(n) {
    if (n <= 1) return n;
    if (cache[n]) {
      return cache[n];
    }
    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return cache[n];
  }

  return fibonacci;
}


const fib = memoizedFibonacci();

console.log(fib(10)); 
console.log(fib(15)); 
console.log(fib(10)); 
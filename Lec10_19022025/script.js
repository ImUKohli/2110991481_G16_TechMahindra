// const users = [
//   { firstName: "Utkarsh", lastName: "Kohli", age: 21 },
//   { firstName: "Gaurav", lastName: "Jangra", age: 22 },
//   { firstName: "Gurnaman", lastName: "Singh", age: 23 },
//   { firstName: "Piyush", lastName: "Saini", age: 28 },
//   { firstName: "Sahil", lastName: "Aggarwal", age: 25 },
//   { firstName: "Agamjot", lastName: "Singh", age: 25 },
// ];


// const ageCount = users.reduce((acc, user) => {
//   acc[user.age] = (acc[user.age] || 0) + 1;
//   return acc;
// }, {});


// console.log(ageCount);


// dataMap = [2,5,7,8,3,9,10]
// var maxNumber = 0;

// for(let i=0;i<WebTransportDatagramDuplexStream.length;i++){
//   if(maxNumber<dataMap[i]){
//     maxNumber = dataMap[i];
//   }
// }

// console.log(maxNumber);

// dataMap.reduce((function(acc,curr){
//   if(curr>acc){
//     acc=curr
//   }
//   return acc;
// }))

// function reachedRestaurant() {
//   return new Promise((resolve) => {
//     console.log("reached Restaurant");
//     setTimeout(() => {
//       console.log("I have reached Eagle Motel");
//       resolve();
//     }, 1000);
//   });
// }

// function TableFinding() {
//   return new Promise((resolve) => {
//     console.log("Table Finding");
//     setTimeout(resolve, 1000);
//   });
// }

// function PriceCheck() {
//   return new Promise((resolve) => {
//     console.log("Price Check");
//     setTimeout(resolve, 1000);
//   });
// }

// function starterOrder() {
//   return new Promise((resolve) => {
//     console.log("Starter Order");
//     setTimeout(resolve, 1000);
//   });
// }

// function mainCourse() {
//   return new Promise((resolve) => {
//     console.log("Main Course");
//     setTimeout(resolve, 1000);
//   });
// }

// function dessert() {
//   return new Promise((resolve) => {
//     console.log("Dessert");
//     setTimeout(resolve, 1000);
//   });
// }

// function payBill() {
//   return new Promise((resolve) => {
//     console.log("Pay Bill");
//     setTimeout(resolve, 1000);
//   });
// }

// function leaveRestaurant() {
//   return new Promise((resolve) => {
//     console.log("Leave Restaurant");
//     setTimeout(resolve, 1000);
//   });
// }

// // Chaining promises
// reachedRestaurant()
//   .then(TableFinding)
//   .then(PriceCheck)
//   .then(starterOrder)
//   .then(mainCourse)
//   .then(dessert)
//   .then(payBill)
//   .then(leaveRestaurant)
//   .then(() => {
//     console.log("Done with the restaurant visit!");
//   })
//   .catch((error) => {
//     console.error("Something went wrong:", error);
//   });

// // Example of a Promise with a condition
// const myRestaurantPromise = new Promise((resolve, reject) => {
//   let time = "13:30"; // 1:30 PM in 24-hour format
//   if (time >= "13:00" && time <= "14:00") {
//     resolve("The restaurant is open. Let's dine in!");
//   } else {
//     reject("The restaurant is closed. Come back later.");
//   }
// });

// myRestaurantPromise
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));


  

const cart = ["shoes","watches","bags","glasses","shirts"];

function createOrder(cart){
  const myPromise = new Promise(function(resolve,reject){
    if(cart.length>0){
      console.log("Order Created Successfully");
      resolve("12345");
    }
    else{
      const err = new Error("ORDER FAILED")
      reject(err.message);
    }
  });
  return myPromise;
}

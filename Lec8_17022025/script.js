// function a(){
//   console.log("First");
// }

// function b(){
//   console.log("Second");
//   a();
// }

// b(a);

// var count = 0;
// document.getElementById("btn-clk").addEventListener('click', function(){
//   count++;
//   console.log("Clicked");
// })

// document.getElementById("btn-one").addEventListener('click', function(){
//   count++;
//   console.log("Clicked")
// })

// document.getElementById("btn-two").addEventListener('click', function(){
//   console.log("Clicked Two");
// })

// document.getElementById("btn-three").addEventListener('click', function(){
//   console.log("Clicked Three");
// })

// document.getElementById("btn-four").addEventListener('click', function(){
//   console.log("Clicked Four");
// })


function reachedRestaurant(callback){
  console.log("reached Restaurant");
  setTimeout(callback,1000);
}

function TableFinding(callback){
  console.log("Table Finding");
  setTimeout(callback,1000);
}

function PriceCheck(callback){
  console.log("Price Check");
  setTimeout(callback,1000);
}

function starterOrder(callback){
  console.log("starter Order");
  setTimeout(callback,1000);
}

function mainCourse(callback){
  console.log("main Course");
  setTimeout(callback,1000);
}

function dessert(callback){
  console.log("dessert");
  setTimeout(callback,1000);
}

function payBill(callback){
  console.log("pay Bill");
  setTimeout(callback,1000);
}

function leaveRestaurant(callback){
  console.log("leave Restaurant");
  setTimeout(callback,1000);
}



//Chaining the CallBack

//Wrong Way Because when put so many It Will Cause Errors
// reachedRestaurant(TableFinding(PriceCheck(starterOrder(mainCourse(dessert(payBill(leaveRestaurant)))))))

reachedRestaurant(() => {
  TableFinding(() => {
    PriceCheck(() => {
      starterOrder(() => {
        mainCourse(() => {
          dessert(() => {
            payBill(() => {
              leaveRestaurant(() => {
                console.log("Finish");
              });
            });
          });
        });
      });
    });
  });
});


// The Above is Called Pyramid of Doom
//To avoid the Above situation of Pyramid of Doom We Use PROMISES 


//Mark and Sweep Algo 
//Inlining
//Copy Elision
//Inline Caching


// function createButtonCounter(buttonId) {
//   let count = 0;
//   document.getElementById(buttonId).addEventListener('click', function() {
//     count++;
//     console.log(`${buttonId} clicked ${count} times`);
//   });
// }

// createButtonCounter("btn-clk");
// createButtonCounter("btn-one");

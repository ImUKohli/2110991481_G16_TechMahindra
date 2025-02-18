//Higher Order Function 

data = [2,4,6,8,10];

const calculateDoubleData = function (data){
  const output=[];
  for(let i=0;i<data.length;i++){
    output.push(data[i]*2);
  }
  return output;
}

const calculateHalfData = function (data){
  const output=[];
  for(let i=0;i<data.length;i++){
    output.push(data[i]/2);
  }
  return output;
}


const calculateAddTenData = function (data){
  const output=[];
  for(let i=0;i<data.length;i++){
    output.push(data[i]+10);
  }
  return output;
}


//One Function
const calculator = function(data,operation){
  const output=[];
  for(let i=0;i<data.length;i++){
    output.push(operation(data[i]));
  }
  return output;
}

const doubleData = (x) => x*2;
const halfData = (x) => x/2;
const addTenData = (x) => x+10;
const multiplyHundred = (x) => x*100;


console.log(calculateDoubleData(data));
console.log(calculateHalfData(data));
console.log(calculateAddTenData(data));

console.log("--------------");

console.log(calculator(data,doubleData));
console.log(calculator(data,halfData));
console.log(calculator(data,addTenData));
console.log(calculator(data,multiplyHundred));


//Benefit of Using HOF Higher Order Functions
// 1) Optimization
// 2) Readablity
// 3) Less Repitition 



//PolyFill  of Map Using Protype

Array.prototype.mapp = function(logic){
  var output = [];
  for(let i=0;i<this.length;i++){
    output.push(logic(this[i]));
  }
  return output;
}
console.log("--------------");
console.log(data.mapp(doubleData));






//Task 1
circle = [2,9,16,42,71];
const pi = 3.14;

function diameterCalc(circle){
  diameter = circle*2;
  return diameter;
}
function circumferenceCalc(circle){
  circumference = 2*pi*circle;
  return circumference;
}
function areaCalc(circle){
  area = pi*circle*circle;
  return area;
}
console.log("--------------");
console.log(circle.map(diameterCalc));
console.log(circle.map(circumferenceCalc));
console.log(circle.map(areaCalc));


//Task 2 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filterOdd(numbers) {
  const output = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) { 
      output.push(numbers[i]); 
    }
  }
  return output;
}

console.log(filterOdd(numbers)); 


Array.prototype.oddMapp = function(logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 !== 0) { 
      output.push(logic(this[i])); 
    }
  }
  return output;
};

console.log(numbers.oddMapp(num => num * 2));

//Task 3 
const users=[
  {
    firstName: "Utkarsh",
    lastName : "Kohli",
    age: 21
  },

  {
    firstName: "Gaurav",
    lastName : "Jangra",
    age: 22
  },

  {
    firstName: "Gurnaman",
    lastName : "Singh",
    age: 23
  },

  {
    firstName: "Piyush",
    lastName : "Saini",
    age: 24
  },

  {
    firstName: "Sahil",
    lastName : "Aggarwal",
    age: 25
  },
]

const fullName = users.map((user)=>user.firstName+" "+user.lastName);

console.log(fullName);

//Task FIlter Out People ABove age 23 using fullName
const filteredFullNames = users.filter((user) => user.age <= 23)
.map((user) => `${user.firstName} ${user.lastName}`);

console.log(filteredFullNames);

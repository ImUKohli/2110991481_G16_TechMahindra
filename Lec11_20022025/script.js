// const myPromiseFromNetflix = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Fetched data from Netflix");
//   }, 1000);
// });

// const myPromiseFromTwitter = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Fetched data from Twitter");
//   }, 2000);
// });

// const myPromiseFromGithub = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Fetched data from Github");
//   }, 3000);
// });

// const myPromiseFromhotstar = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Fetched data from hotstar");
//   }, 4000);
// });

// const dataFromAll = Promise.allSettled([
//   myPromiseFromGithub,
//   myPromiseFromNetflix,
//   myPromiseFromTwitter,
//   myPromiseFromhotstar,
// ]);
// console.log(dataFromAll);

// const fromRace =
//   Promise.race()[
//     (myPromiseFromGithub,
//     myPromiseFromNetflix,
//     myPromiseFromTwitter,
//     myPromiseFromhotstar)
//   ];
// console.log(fromRace);

// const fromAny = Promise.any([
//   myPromiseFromGithub,
//   myPromiseFromNetflix,
//   myPromiseFromTwitter,
//   myPromiseFromhotstar,
// ]);


// Async Function is also a Promise

// console.log("Class Start");

// async function techDirectFunction() {
//   console.log("Hello this is tech mahindra")
// }

// const techData = techDirectFunction();
// console.log(techData);

// console.log("Marking Attendance")
// techData.then((res)=>{
//   return res;
// })

// const projectSubmissionByKuber = new Promise (function(res,rej){
//   setTimeout(()=>{
//     res("Submitted Succesfully");
//   },5000)
// })

// console.log("Class Lunch")
// function projectEvaluation(){
//   console.log("Class Attendance");
//   const projectFile = projectSubmissionByKuber;
//   console.log(projectFile);
//   console.log("Project File Check")
// }

// projectEvaluation();


// console.log("Class End")


// function fetchApiData(){
//   const data = fetch("https://api.chucknorris.io/jokes/categories");
//   console.log(data);
// }

// const finalData = fetchApiData();

// finalData.then((res)=>{
//   console.log(res);
// })



async function fetchApiData() {
  const data = await fetch("https://api.chucknorris.io/jokes/categories");
  // const data = await fetch("https://api.chucknorris.io/jokes/random");
  const mydata = await data.json(); 
  return mydata;
}

fetchApiData()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Error fetching data:", err);
  });

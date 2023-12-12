//promise
// let func = () => {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Agaya dataa");

//         } else {
//             reject("nahi aaya data");
//         }
//     });
// };

// func("hello")


// .then and catch syntax 1

// let thenCatch = func()
// thenCatch
// .then(()=>{
//     console.log("promise is resolved")
//     console.log(thenCatch)
// })
// .catch(()=>{
//     console.log("promise is rejected")
//     console.log(thenCatch)
// })

// .then and catch syntax 2
// let thenCatch = func()
// function thens(){
//     console.log("data agaya")
// }
// function catchs(){
//     console.log("data nahi aya")
// }
// thenCatch.then(thens)
// .catch(catchs)

// .then and catch syntax 3
// func()
//     .then((result) => {
//         console.log("promise is resolved", result);
//     })
//     .catch((error) => {
//         console.log("promise is rejected:", error);
//     });



// correct syntax
// let func = () => {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Agaya dataa");

//         } else {
//             reject("nahi aaya data");
//         }
//     });
// };
// func()
//     .then((result) => {
//         console.log("promise is resolved", result);
//     })
//     .catch((error) => {
//         console.log("promise is rejected:", error);
//     });



// //promise chaining synrax 1 (dont use) (pehla dat mai hi net slow toh dusra nahi chalega or 2 mai slow toh teesra bhi nhai chalega )
// let func = () => {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Agaya dataa");

//         } else {
//             reject("nahi aaya data");
//         }
//     });
// };
// func()
//     .then(() => {
//         console.log("data 1 saved");
//         func()
//         .then(()=>{console.log("data 2 saved")})
//         func()
//         .then(()=>{console.log("dat 3 saved")})
//     })
//     .catch((error) => {
//         console.log("promise is rejected:", error);
//     });





//promise chaining synrax 2 (suggested syntax)
// let func = () => {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Agaya dataa");

//         } else {
//             reject("nahi aaya data");
//         }
//     });
// };
// func("data1")
//     .then((result) => {
//         console.log("data 1 saved:-",result);
//        return func("data2")
//     })
//     .then((result)=>{
//         console.log("data 2 saved:-",result);
//         return func("data3")
//     })
//     .then((result)=>{
//         console.log("data 3 saved:-",result);
//     })
//     .catch((error) => {
//         console.log("promise is rejected:", error);
//     });




// promise full syntax
// let func = (data) => {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Agaya dataa");

//         } else {
//             reject("nahi aaya data");
//         }
//     });
// };
// func("data1")
//     .then((result) => {
//         console.log("data 1 saved:-",result);
//        return func("data2")
//     })
//     .then((result)=>{
//         console.log("data 2 saved:-",result);
//         return func("data3")
//     })
//     .then((result)=>{
//         console.log("data 3 saved:-",result);
//     })
//     .catch((error) => {
//         console.log("promise is rejected:", error);
//     });




//task

// let color = (color, time) => {
//     let p = document.querySelector("#p")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             p.style.color = color
//             resolve("promise resolve")
//                 reject("promise rejected")
//         }, time)

//     })
// }
// color("yellow", 1000).
//     then((result) => {
//         console.log(result)
//         return color("red", 1000)
//     })
//     .then((result) => {
//         console.log(result)
//         return color("purple", 10000)
//     })
//     .then((result) => {
//         console.log(result)
//         return color("cyan", 1000)
//     })
//     .then((result) => {
//         console.log(result)
//         return color("pink", 1000)
//     })

//     .then((result) => {

//         console.log(result)
//         return color("brown", 1000)
//     })

//     .catch((e) => {
//         console.log("promise catch : error ",e)
//     })




//asyn/await
//await jabhi chalega jab function async hoga
// function names(){
// return new Promise((resolve,reject)=>{
//  setTimeout(()=>{
// console.log("haseeb")
// resolve()
//  },2000)

// })
// }


// async function name2(){
//     await names()
// await    names()
//     names()

// }
// name2()


//task (promise work using async/await keywords)

// let color = (color, time) => {
//     let p = document.querySelector("#p")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             p.style.color = color
//             resolve("promise resolve")
//                 reject("promise rejected")
//         }, time)

//     })
// }
// color("yellow", 1000).
//     then((result) => {
//         console.log(result)
//         return color("red", 1000)
//     })
//     .then((result) => {
//         console.log(result)
//         return color("purple", 10000)
//     })
//     .then((result) => {
//         console.log(result)
//         return color("cyan", 1000)
//     })
//     .then((result) => {
//         console.log(result)
//         return color("pink", 1000)
//     })

//     .then((result) => {

//         console.log(result)
//         return color("brown", 1000)
//     })

//     .catch((e) => {
//         console.log("promise catch : error ",e)
//     })

// our task is to shoert above code using async/await
// task 
// let color = (color, time) => {
//     let p = document.querySelector("#p")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             p.style.color = color
//             resolve("promise resolve")
//             reject("promise rejected")
//         }, time)

//     })
// }
// async function colorDisplay() {
//     await color("red", 1000)
//     await color("yellow", 1000)
//     await color("pink", 1000)
//     await color("purple", 1000)
//     await color("cyan", 1000)
// }
// colorDisplay()

//await handling errors using try & catch 
// let color = (color, time) => {
//     let p = document.querySelector("#p")
//     return new Promise((resolve, reject) => {
//         let num = Math.floor(Math.random() * 10) + 1
//         if (num > 4) {
//             setTimeout(() => {
//                 p.style.color = color
//                 console.log(`${color} was added`)
//                 resolve("promise resolve")
//             }, time)
//         }

//         else {
//             reject()
//         }
//     })
// }
// async function colorDisplay() {
//     //agar esa karta toh agar 5 color mai sa kesi ik mai bhi error ajata toh last wla console
//     //haseeb , ali bhi nhia chalta esi lya esa handle karna ka lya try catch use kya 
//     // await color("red", 1000)
//     // await color("yellow", 1000)
//     // await color("pink", 1000)
//     // await color("purple", 1000)
//     // await color("cyan", 1000)
//     // console.log("haseeb")
//     // console.log("ali")


//     try {  // await handling errors using try & catch  abb error nahi ayega
//         await color("red", 1000)
//         await color("yellow", 1000)
//         await color("pink", 1000)
//         await color("purple", 1000)
//         await color("cyan", 1000)
//     } catch {
//         console.log("catch  mai error agaya ")
//     }
//     console.log("haseeb")
//     console.log("ali")

// }
// colorDisplay()



//complete
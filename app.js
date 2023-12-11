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
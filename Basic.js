// Nodejs Documentation : 
// https://nodejs.org/dist/latest-v16.x/docs/api/

// 1)
// console.log("Hello Nodejs")
let arr = [1,23,10,21,25];
// console.log("Array : ",arr);
let result = arr.filter((item) => {
    // console.log(item)
    return item > 10;
});
console.log(result)

// 2)
const app = require('./app');
// console.log(app)
// console.log(app.a)
// console.log(app.b)
// console.log(app.c())

// 3) Global Module : console
// console.log("Global Module");

// 4) Non Global Module : you should import 
// const fs = require('fs');
// fs.writeFileSync("Hello.text","Non Global Module...");

const fs = require('fs').writeFileSync;
fs("abc.txt","only  writeFileSync");

// 5) Print Directory and File Name :
// console.log("dirname: ",__dirname);
// console.log("filename: ",__filename);


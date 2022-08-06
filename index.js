const fs = require('fs');
// fs.writeFileSync("apple.txt","This is fruit")
const path = require('path');
const dirPath = path.join(__dirname,'files');//give file path 
console.log(dirPath);

// create multiple files
// for(let i=0; i<5; i++){
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,"This is Simple File.")
// }

// Read file
fs.readdir(dirPath,(err,files) =>{
    // console.log(files);//array form
    files.forEach((item) =>{
        console.log("File Name Is : ",item);//single file
    })
})
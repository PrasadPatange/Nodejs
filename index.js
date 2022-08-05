// console.log("Take Input From Command Line...")
// console.log(process.argv) // It's an Array index start 0,1,2,...
// console.log(process.argv[2])
// console.log(process.argv[3])

// To create file use fs module
const fs = require('fs');
const input = process.argv;
// fs.writeFileSync(input[2],input[3])
//cmd :
// node index.js apple.txt "This is Fruit."

if(input[2] == "add"){
    fs.writeFileSync(input[3],input[4]);
    // cmd :
    // node index.js add orange.txt "This is color and  Fruit."
}else if(input[2] == "remove"){
    fs.unlinkSync(input[3]);
    // cmd :
    // node index.js remove orange.txt
}else{
    console.log("Invalid Input");
    // cmd :
    //node index.js
}
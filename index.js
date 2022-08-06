const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;
//CREATE
fs.writeFileSync(filePath, "This is Simple Text File");

//READ
// fs.readFile(filePath,(err,item) =>{
//     console.log(item);
//     //output : <Buffer 54 68 69 73 20 69 73 20 53 69 6d 70 6c 65 20 54 65 78 74 20 46 69 6c 65>
// })
fs.readFile(filePath, "utf-8", (err, item) => {
  console.log(item);
  // This is Simple Text File
});

// UPDATE
fs.appendFile(filePath, " and file name is apple.txt", (err) => {
  if (!err) console.log("File Updated.");
});

// RENAME
fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
  if (!err) console.log("File Name is Updated.");
});

// DELETE
fs.unlinkSync(`${dirPath}/fruit.txt`);

// Interview Question :
// 1) What is Buffer :
//  -> It is Temporary Memory Location ,nodejs use this for performing operations.

// Nodejs Work Process :

console.log("Starting Up...");

// go into nodeApi because setTimeout is come from C++
setTimeout(() => {
  console.log("2 sec log");
}, 2000);

setTimeout(() => {
  console.log("0 sec log");
}, 0);

console.log("Finishing Up...");

// Output :
// Starting Up...
// Finishing Up...
// 0 sec log
// 2 sec log
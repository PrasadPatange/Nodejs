// Asynchronous Programming/Operation :
// In This ,second task do not wait to finish first task.
console.log("Start Execution...");

setTimeout(() =>{
    console.log("Logic Execution...");
},2000)

console.log("Complete Execution...");

// Draback of Async Programming :
// not update value.
let a = 10;
let b = 0;

setTimeout(()=>{
    b = 20;
},2000);

console.log(a+b);

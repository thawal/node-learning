const fs=require("node:fs");
setTimeout(()=>{console.log("timer 1")},0)
fs.readFile(__filename,()=>{
    console.log("this is readFile 1");
    setImmediate(()=>console.log("this is inner setImmediate file "));
    process.nextTick(()=>console.log("this is inner process.nextTick"));
    Promise.resolve().then(()=>console.log("this is inner promise.then"))
});


process.nextTick(()=>console.log("this is process.nextTick 1"));
Promise.resolve().then(()=>console.log("this is Promise then 1"))
// setImmediate(()=>console.log("this is check 1"))
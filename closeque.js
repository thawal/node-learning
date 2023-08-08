const fs=require("node:fs");

const readableStream=fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close",()=>{
    console.log("this is the readable stream close callback")
});
setImmediate(()=>console.log("this is setImmediate"))
setTimeout(()=>console.log("this is setTimeout"))
process.nextTick(()=>console.log("this is process.nextTick"))
Promise.resolve().then(()=>console.log("this is promise then cb"))
// const fs=require("node:fs");

// console.log("first")
// fs.readFile("file.txt","utf-8",(err,data)=>{
//     console.log("file contents")
// })

// console.log("last")

// //synchrounous exp
// const crypto=require("node:crypto");
// const start=Date.now();
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// console.log("Hash: ",Date.now()-start);

//async version
const crypto=require("node:crypto")
process.env.UV_THREADPOOL_SIZE= 8;//to increase the thread pool size
const MAX_CALLS=8;
const start=Date.now();
for(let i=0;i<MAX_CALLS;i++){
    crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
        console.log(`Hash: ${i+1} `,Date.now()-start);
    })
    //each call will run on a seperate thread, takes almost similar time to execute by each thread
    //these seperate are inside libuv's thread pool
}
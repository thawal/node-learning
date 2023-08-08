// console.log("First");
// process.nextTick(()=>console.log("this is process.nextTick 1"))
// console.log("last");

// Promise.resolve().then(()=>console.log("this is Promise.resolve 2"));
// process.nextTick(()=>console.log("this is process.nextTick 2"))

setTimeout(()=>console.log("this is setTimeout 1"),0);

setTimeout(()=>{
    console.log("this is setTimeout 2");
    process.nextTick(()=>console.log("this is nextTick inside the setTimeout"))
},0);

setTimeout(()=>console.log("this is setTimeout 3"),0);



process.nextTick(()=>console.log("this is process.nextTick 1"));
process.nextTick(()=>{console.log("this is process.nextTick 2");
 process.nextTick(()=>console.log("this is inner process.nextTick"))
});
process.nextTick(()=>console.log("this is process.next 3"))

Promise.resolve().then(()=>console.log("this is Promise.resolve 1"))
Promise.resolve().then(()=>{
    console.log("this is Promise.resolve 2");
    process.nextTick(()=>console.log("this is inner nextTick inside the Promise then"))
});
Promise.resolve().then(()=>console.log("this is Promise.resolve() 3"));
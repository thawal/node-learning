// function greet(name){
//     console.log(`hello ${name}`)
// }

// function higherOrderFunction(callbackFn){
//     const name="manoj";
//     callbackFn(name);
// }
// higherOrderFunction(greet)

const EventEmitter=require("node:events")
const emitter= new EventEmitter;
//responding
emitter.on("order-pizza",(size,topping)=>{
    console.log(`Order placed, baking ${size} pizza with ${topping} `)})
emitter.on("order-pizza",(size)=>{
    if(size==="large")
    console.log("Serving complimentry drink")
})
console.log("first")
//dispatching
emitter.emit("order-pizza","large","extra-cheese")

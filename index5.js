// //fs module
// const fs=require("node:fs")
// console.log("First")
// //synchronous way
// const fileContents=fs.readFileSync("./file.txt","utf-8");
// console.log(fileContents);

// console.log("Second")
// //async way
// fs.readFile("./file.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })
// console.log("Third");

// //by default write method overrides the existing one 
// //so to append use a third arg in {}
// //sync way
// fs.writeFileSync("./greet.txt","Hello Namste")
// //async way
// fs.writeFile("./greet.txt","welcome to the node js ",{flag:"a"}, (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("message written")
//     }
// })-

const fs=require("node:fs/promises")

async function readFile(){
    try{
        const data=await fs.readFile("./file.txt","utf-8");
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
readFile();

// console.log("First one")
// fs.readFile("./file.txt","utf-8")
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))

// console.log("second two")
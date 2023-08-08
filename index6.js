const fs=require("node:fs")
const zlib=require("node:zlib")

const gzip=zlib.createGzip()
const readableStream=fs.createReadStream("./file.txt",{
    encoding:"utf-8",
    highWaterMark:2
})

readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))
//moving from a readable stream to a transform stream than to a writable stream with pipe

const writeableStream=fs.createWriteStream("./file2.txt");
//streams extends from eventemitter class
//it allows us to add listners to the events
// readableStream.on("data",(chunk)=>{
//     console.log(chunk);
//     writeableStream.write(chunk);
// })

//pipes
readableStream.pipe(writeableStream);
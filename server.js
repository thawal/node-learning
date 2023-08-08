const http=require("node:http");
const fs=require("node:fs");

const server=http.createServer((req,res)=>{
    // const superHero={
    //     firstName:"Bruce",
    //     lastName:"Wayne"
    // }
    res.writeHead(200,{"Content-Type":"text/html"});
    // const html=fs.readFileSync("./index.html","utf-8")
    // res.end(html);
    // fs.createReadStream("./index.html","utf-8").pipe(res)
    fs.createReadStream(__dirname+"/index.html","utf-8").pipe(res)
    // console.log(req)

})

server.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

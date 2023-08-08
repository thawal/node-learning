const http=require("node:http");

server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello World!");
})
 || 3000;
PORT=process.env.PORT || 3000;//also accepts the value as an environment var
server.listen(PORT,()=>{
    console.log("Server is runnig on port 3000")
})
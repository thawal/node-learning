const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("Home Page");
    }else if(req.url==="/slow-page"){
        for(let i=0;i<60000;i++){};//simulates  CPU work
        res.writeHead(200,{"Content=Type":"text/plain"});
        res.end("Slow Page")
    }
});

server.listen(3001,()=>{
    console.log("Server is running on port 3001")
})
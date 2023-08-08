const cluster=require("cluster");
const http=require("http")
// const Os=require("node:os");

// console.log(Os.cpus().length);

if(cluster.isMaster){
    console.log(`Master process ${process.pid} is running`);
    //as master we need to create new workers, we use fork method on cluster obj
    cluster.fork();
    cluster.fork();
}else {
    console.log(`Worker process ${process.pid} is running`);
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
}
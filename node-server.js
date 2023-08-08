const http=require("node:http");

const server=http.createServer((req,res)=>{
    const superHero={
        firstName:"Bruce",
        lastName:"Wayne"
    }

    res.writeHead(200,{"Conten-Type":"application/json"});
    res.end(JSON.stringify(superHero));
    // console.log(req)
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

const fs=require("node:fs");
const http=require("node:http")

const server=http.createServer((req,res)=>{
    const name="Manoj";
    res.writeHead(200,{"Content-Type":"text/html"});
    let html=fs.readFileSync("./index.html","utf-8");
    html=html.replace("{{name}}",name);
    res.end(html);
    // fs.createReadStream("./index.html","utf-8").pipe(res)
    // console.log(req)

})

server.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

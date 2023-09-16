const http=require("http")
const url=require("url")

console.log(url)

const server=http.createServer((req,res)=>{

    if(req.url==='/'){
        res.end('hello from the other side.');
     }
     else if(req.url==='/about'){
        res.end("about side")
     }
     else if(req.url==='/contact'){
        res.end("contact side")
     }
     else if(req.url==='/details'){
        res.end("details side")
     }
     else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<h1>not fount 404,</h1>")
     }
})

server.listen(4000,()=>{
    console.log("correct")
})
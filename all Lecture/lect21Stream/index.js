const fs=require("fs")
const http=require("http")
const path=require("path")

const server=http.createServer()
server.on("request",(req,res)=>{
    const stream1=fs.createReadStream("imput.txt")
    stream1.pipe(res);

})
server.listen(3000);
